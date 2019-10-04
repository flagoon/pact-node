import chai = require('chai');
import index from './index';
const expect = chai.expect;

describe('Index Spec', () => {
  it('Typescript import should work', () => {
    expect(index).to.be.ok;
    expect(index.createServer).to.be.ok;
    expect(index.createServer).to.be.a('function');
  });

  it('Node Require import should work', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const entrypoint = require('./index');
    expect(entrypoint).to.be.ok;
    expect(entrypoint.createServer).to.be.ok;
    expect(entrypoint.createServer).to.be.a('function');
  });
});
