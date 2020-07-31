const { moneyValue } = require('./index');

describe('moneyValue', () => {
  it('should return number when input string with number', () => {
    expect(moneyValue('12.34')).toEqual(12.34);
  });
  it('should return negative numbers when they starts with "-"', () => {
    expect(moneyValue('-0.89')).toEqual(-0.89);
    expect(moneyValue('-0.89')).toEqual(-0.89);
  });
  it('should remove 0 when starts with "0"', () => {
    expect(moneyValue('007')).toEqual(7);
  });
  it('should make with float . when starts with "."', () => {
    expect(moneyValue('.11')).toEqual(0.11);
  });
  it('should remove "$"', () => {
    expect(moneyValue('-$ 0.1')).toEqual(-0.1);
    expect(moneyValue('$-2.3456')).toEqual(-2.3456);
    expect(moneyValue('$.2')).toEqual(0.2);
  });
});