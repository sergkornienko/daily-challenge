const { nonConsecutive } = require('./index');

describe('nonConsecutive', () => {
  it('should return arrau with index & values of non consecutive', () => {
    expect(nonConsecutive([6,7,8,9,11,12])).toEqual([
      { i: 4, n: 11 },
    ]);
    expect(nonConsecutive([100,101,102,112,113,114,129])).toEqual([
      { i: 3, n: 112 },
      { i: 6, n: 129 },
    ]);
  });
});
