const { subtractSum } = require('./index');

// bed tests bcs always apple, but i didn't find numbers with different result
describe('subtractSum', () => {
  it('should return fruit when result less then 100', () => {
    expect(subtractSum(15)).toBe('apple');
    expect(subtractSum(103)).toBe('apple');
    expect(subtractSum(99)).toBe('apple');
  });
  it('should continue substract to return fruit when result more then 100', () => {
    expect(subtractSum(136)).toBe('apple');
    expect(subtractSum(105)).toBe('apple');
  });
});
