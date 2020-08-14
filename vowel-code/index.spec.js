const { encode, decode } = require('./index');

describe('encode', () => {
  it('should transform vowel to numbers when they in lower case', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });
  it('should not change other latters when they in the string', () => {
    expect(encode('hello')).toBe('h2ll4');
  });
  it('should not transform vowel when they in upper case', () => {
    expect(encode('A')).toBe('A');
    expect(encode('E')).toBe('E');
    expect(encode('I')).toBe('I');
    expect(encode('O')).toBe('O');
    expect(encode('U')).toBe('U');
  });
});

describe('decode', () => {
  it('should transform numbers to vowel when they in lower case', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });
  it('should not change other latters when they in the string', () => {
    expect(decode('h3 th2r2')).toBe('hi there');
  });
});