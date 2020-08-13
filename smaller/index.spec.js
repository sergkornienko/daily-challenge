const { smaller } = require('./index');

describe('smaller', () => {
  it('should return array with values which shows how many smaller on the right side', () => {
    expect(smaller([5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 0]);
    expect(smaller([1, 2, 0])).toEqual([1, 1, 0]);
  });
  it('should not count values when they equal', () => {
    expect(smaller([3, 2, 3, 3, 1])).toEqual([2, 1, 1, 1, 0]);
  });
  it('should count values when they repeat', () => {
    expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).toEqual([4, 1, 5, 5, 0, 0, 0, 0, 0]);
  });
});