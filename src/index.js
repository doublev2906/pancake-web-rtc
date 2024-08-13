class ChatPluginWebRtc {
  constructor(channel, targetId) {
    this.channel = channel;
    this.targetId = targetId;
    this.peerConnection = null;
    this.localAudio = null;
    this.remoteAudio = null;
    this.localStream = null;
  }

  listenSocketEvent() {
    this.channel.on("peer_candidate", async (data) => {
      console.log("Get ice candidate from remote peer");
      if (this.peerConnection) {
        try {
          await this.peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
          console.log("addIceCandidate success");
        } catch (err) {
          console.error("addIceCandidate error", err);
        }
      }
    });

    this.channel.on("peer_remote_description", async (data) => {
      console.log("Get offer from remote peer");
      if (!this.peerConnection) {
        this.initPeerConnection();
      }
      const desc = new RTCSessionDescription(data.description);
      await this.peerConnection.setRemoteDescription(desc);
      if (data.description.type === "offer") {
        try {
          const answer = await this.peerConnection.createAnswer();
          await this.peerConnection.setLocalDescription(answer);
          this.channel.push("peer_remote_description", {
            description: this.peerConnection.localDescription,
            target_id: this.targetId,
          });
          this.setLocalAudio();
        } catch (err) {
          console.error("createAnswer error", err);
        }
      }
    });
  }



  initPeerConnection() {
    if (this.peerConnection) return;

    this.peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    this.peerConnection.onconnectionstatechange = () => {
      console.log(this.peerConnection.connectionState);
      if (this.onPeerConnectionStateChange) {
        this.onPeerConnectionStateChange(this.peerConnection.connectionState);
      }
    };

    this.peerConnection.onicecandidate = (event) => {
      console.log("Get ice candidate from local peer");
      if (event.candidate) {
        this.channel.push("peer_candidate", {
          candidate: event.candidate,
          target_id: this.targetId,
        });
      }
    };

    this.peerConnection.ontrack = (event) => {
      if (!this.remoteAudio) {
        console.log("Get remote stream from remote peer");
        this.remoteAudio = this.createNewAudio(true);
        this.remoteAudio.srcObject = event.streams[0];
        this.remoteAudio.play();
        this.remoteAudio.ontimeupdate = () => {
          if (this.onAudioTimeUpdate) {
            this.onAudioTimeUpdate(this.remoteAudio.currentTime);
          }  
        }
      }
    };

    this.peerConnection.onnegotiationneeded = async () => {
      console.log("Negotiation needed");
      try {
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        this.channel.push("peer_remote_description", {
          description: this.peerConnection.localDescription,
          target_id: this.targetId,
        });
      } catch (err) {
        console.error("Negotiation error", err);
      }
    };
  }

  async setLocalAudio() {
    if (this.localAudio || this.localStream) return;

    try {
      this.localAudio = this.createNewAudio();
      this.localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.localAudio.srcObject = this.localStream;
      this.localStream.getTracks().forEach((track) => this.peerConnection.addTrack(track, this.localStream));
    } catch (err) {
      console.error("setLocalAudio error", err);
    }
  }

  startCall() {
    if (!this.peerConnection) {
      this.initPeerConnection();
    }
    this.setLocalAudio();
    this.listenSocketEvent();
  }

  hangUp() {
    this.peerConnection?.close();
    this.peerConnection = null;
    this.resetAudio(this.localAudio);
    this.resetAudio(this.remoteAudio);
    this.localStream?.getTracks().forEach((track) => track.stop());
    this.localStream = null;
  }

  resetAudio(audio){
    if (!audio) return;
    audio.srcObject = null;
    audio = null;
  }

  createNewAudio(isRemote = false) {
    const audio = new Audio();
    audio.muted = !isRemote;
    audio.autoPlay = true;
    return audio;
  }
}

export { ChatPluginWebRtc };
