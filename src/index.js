const LiveVideo = class {
  constructor(video, audio = true) {
    this.video = video;
    this.audio = audio;
  }

  play() {
    const { audio, video } = this;
    if (video && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      return navigator.mediaDevices.getUserMedia({
        video: true,
        audio
      }).then((stream) => {
        try {
          video.srcObject = stream;
        } catch (error) {
          video.src = window.URL.createObjectURL(stream);
        }

        video.play();
      });
    }

    console.log('video && navigator.mediaDevices && navigator.mediaDevices.getUserMedia not found');

    return false;
  }

  pause() {
    this.video.pause();

    return false;
  }
};

export default LiveVideo;
