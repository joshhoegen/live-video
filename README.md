# Live video from device camera to video tag

Tiny! No Deps! 1,127 bytes!

```js
// Simply add a video node
import LiveVideo from 'live-video';

const lv = new VideoToCanvas(document.getElementById('myVideo'), false)
lv.play().then(() => {
  // Do stuff
});
```


# License

MIT © Josh Hoegen
