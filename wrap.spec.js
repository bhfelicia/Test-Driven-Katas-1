const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string is provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
});
