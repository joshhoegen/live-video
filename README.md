# Live video from device camera to video tag

Tiny! No Deps! 1,127 bytes!

```js
// JUST CALL VideoToCanvas(video, audio, camera)
/**
 * Return chosen camera. Return default true value if only one exists
 * @param {Object} video - Required. A video element.
 * @param {bool} audio - Optional. Use audio?
 * @param {Number} camera - Optional. Which camera to use.
 */

// Simply add a video node
import LiveVideo from 'live-video';

const lv = new VideoToCanvas(document.getElementById('myVideo'), false)
lv.play().then(() => {
  // Do stuff
});
```


# License

MIT © Josh Hoegen
