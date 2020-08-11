const { duplicateEncoder } = require('./index');

describe('duplicateEncoder', () => {
  it('should convert characters to "(" when they appear only once', () => {
    expect(duplicateEncoder('abcdef')).toBe('((((((');
  });
  it('should convert characters to ")" when they appear more then once', () => {
    expect(duplicateEncoder('ff')).toBe('))');
  });
  it('should convert characters to ")" when they appear more then once and in different cases', () => {
    expect(duplicateEncoder('cC')).toBe('))');
  });
  it('should convert characters when they have empty spaces', () => {
    expect(duplicateEncoder('Success (( @')).toBe(')())())))))(');
  });
});