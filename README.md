# Live video from device camera to video tag

Tiny! No Deps! ~2kb!

```
npm install live-video
```

```js
// JUST CALL LiveVideo({video: video, audio: false, camera: 0})
/**
 * Return chosen camera. Return default true value if only one exists
 * @param {Object} props - Holds params to start live-video.
 * @param {Element} props.video - A video element.
 * @param {bool} props.audio - Use audio?
 * @param {Number} props.camera - Which camera to use.
 */

// Import
import LiveVideo from 'live-video';

// Simply add a video node
const lv = new LiveVideo(document.getElementById('myVideo'), false);
lv.play().then(() => {
  // Do stuff
});
```


# License

MIT © Josh Hoegen
