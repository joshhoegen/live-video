const LiveVideo = class {
  /**
   * Return chosen camera. Return default true value if only one exists
   * @param {Object} video - A video element.
   * @param {bool} audio - Use audio?
   * @param {Number} camera - Which camera to use.
   */
  constructor(video, audio = true, camera = 0) {
    this.video = video;
    this.audio = audio;
    this.activeCamera = camera;
    this.vidVal = this.getCamera();
  }

  getCamera() {
    const cameras = [];
    const getDevices = navigator.mediaDevices.enumerateDevices();

    return getDevices.then((info) => {
      for (let i = 0; i < info.length; i += 1) {
        if (info[i].kind === 'videoinput') {
          cameras.push(info[i]);
        }
      }

      return {
        deviceId: {
          exact: cameras[this.activeCamera].deviceId
        }
      };
    }).catch(() => true);
  }

  play() {
    const {
      audio,
      video
    } = this;
    if (video && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      return navigator.mediaDevices.getUserMedia({
        video: this.vidVal,
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
