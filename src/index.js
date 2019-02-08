const LiveVideo = class {
  /**
   * Return chosen camera. Return default true value if only one exists
   * @param {Object} props - Holds params to start live-video.
   * @param {Element} props.video - A video element.
   * @param {bool} props.audio - Use audio?
   * @param {Number} props.camera - Which camera to use.
   */
  constructor(props) {
    const params = Object.assign({
      audio: true,
      camera: 0
    }, props);

    Object.assign(this, params);
    this.vidVal = this.video ? this.getCamera() : true;
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
          exact: cameras[this.camera].deviceId
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
