const { coins } = require('./index');

describe('coins', () => {
  it('should return minimum amount of coins', () => {
    const countChange = coins([1, 5, 10, 25]);
    expect(countChange(75)).toBe(3);
    expect(countChange(70)).toBe(4);
    expect(countChange(123)).toBe(9);
    const count = coins([1,2,5,10,20,50]);
    expect(count(75)).toBe(3);
    expect(count(70)).toBe(2);
    expect(count(123)).toBe(5);
  });
});