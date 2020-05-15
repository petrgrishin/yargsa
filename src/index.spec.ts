import Yargsa from './index';

describe('yargsa', () => {
  it('has a test', async () => {
    const yargsa = new Yargsa();
    expect(await yargsa.test()).toEqual('ololo');
  });
});
