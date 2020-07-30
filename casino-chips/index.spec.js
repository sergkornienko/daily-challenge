const { solve } = require('./index');

describe('Casino chips', () => {
  it('should find number of days when all piles != 0', () => {
    expect(solve([1,1,1])).toBe(1);
    expect(solve([1,2,1])).toBe(2);
    expect(solve([4,1,1])).toBe(2);
    expect(solve([8,1,4])).toBe(5);
    expect(solve([7,4,10])).toBe(10);
    expect(solve([12,12,12])).toBe(12);
    expect(solve([1,23,2])).toBe(3);
  });
});