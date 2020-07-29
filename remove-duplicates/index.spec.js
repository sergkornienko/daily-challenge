const { solve } = require('./index');

describe('solve', () => {
  it('should not remove anything when without duplications', () => {
    expect(solve([1, 54, 6, 7, 9898, 4])).toEqual([1, 54, 6, 7, 9898, 4]);
  });
  it('should remove numbers when they appera more than 1 time', () => {
    expect(solve([1,2,1,2,1,2,3])).toEqual([1, 2, 3]);
  });
  it('should remove numbers from left side when they appera more than 1 time', () => {
    expect(solve([3, 4, 4, 3, 6, 3])).toEqual([4, 6, 3]);
    expect(solve([1,2,1,2,1,1,3])).toEqual([2, 1, 3]);
  });
});