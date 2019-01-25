import { assert } from 'chai';
import LiveVideo from '../src';

// TODO: Use jsdom http://www.snappyjs.com/2018/03/27/effective-mocha-testing-tips-tricks/

describe('Live video test.', () => {

  it('return a media stream', () => {
    const vid = new LiveVideo()
    assert(!!vid, 'Default not awesome :(');
  });

});
