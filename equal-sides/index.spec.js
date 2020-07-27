const { equalSides } = require('./index');

describe('likes', () => {
  it('should return index when sum on both side equal', () => {
    expect(equalSides([5, 20, 10, 30, 10, 10, 5, 15, 35])).toBe(4);
    expect(equalSides([1, 2, 3, 4, 3, 2, 1])).toBe(3);
    expect(equalSides([1,100,50,-51,1,1])).toBe(1);
  });
  it('should return -1 when sum on both side not equal', () => {
    expect(equalSides([50,-51,1,1])).toBe(-1);
  });
});