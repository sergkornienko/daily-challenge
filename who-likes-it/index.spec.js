const { likes } = require('./index');

describe('likes', () => {
  it('should return "no one likes this" when empty array', () => {
    expect(likes([])).toBe('no one likes this');
  });
  it('should return "${name} likes this" when in array 1 name', () => {
    expect(likes(['Peter'])).toBe('Peter likes this');
  });
  it('should return "${name_0} and ${name_1} like this" when in array 2 names', () => {
    expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
  });
  it('should return "${name_0}, ${name_1} and ${name_2} like this" when in array 3 names', () => {
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
  });
  it('should return "${name_0}, ${name_1} and ${other_count} others like this" when in array more than 3 names', () => {
    expect(likes(['Alex', 'Peter', 'Max', 'John', 'Mark'])).toBe('Alex, Peter and 3 others like this');
  });
});