const { halvingSum } = require('./index');

describe('halvingSum', () => {
  it('should return halving sum', () => {
    expect(halvingSum(25)).toBe(47);
    expect(halvingSum(40)).toBe(78);
    expect(halvingSum(127)).toBe(247);
  });
});