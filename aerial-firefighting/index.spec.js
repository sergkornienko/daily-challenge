const { waterbombs } = require('./index');

describe('likes', () => {
  it('should make separate waterbomb when have building', () => {
    expect(waterbombs('xxYxx', 3)).toBe(2);
    expect(waterbombs('xxxxYxYx', 5)).toBe(3);
  });
  it('should cower fire up to a width when representing fire in the row > w', () => {
    expect(waterbombs('xxxxxYxYx', 2)).toBe(5);
    expect(waterbombs('xxYxx', 1)).toBe(4);
  });
  it('should return correct result when last Y', () => {
    expect(waterbombs('xxxxxYxYxY', 2)).toBe(5);
    expect(waterbombs('xxYxxY', 3)).toBe(2);
  });
});