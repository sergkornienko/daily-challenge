const { reverseWords } = require('./index');

describe('reverseWords', () => {
  it('should return reversed word', () => {
    expect(reverseWords('double')).toEqual('elbuod');
    expect(reverseWords('spaces')).toEqual('secaps');
  });
  it('should return reversed words in the same order when they have " " splitter', () => {
    expect(reverseWords('This is an example!')).toEqual('sihT si na !elpmaxe');
  });
});