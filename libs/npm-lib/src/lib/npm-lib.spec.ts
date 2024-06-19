import { npmLib } from './npm-lib';

describe('npmLib', () => {
  it('should work', () => {
    expect(npmLib()).toEqual('npm-lib');
  });
});
