const { fixStringCase } = require('./index');

describe('fixStringCase', () => {
  it('should transform to lowerCase when upper case characters less then lower', () => {
    const word = 'Dakh Daughters Gannusya';

    expect(fixStringCase(word)).toBe('dakh daughters gannusya');
  });
  it('should transform to upperCase when lower case characters less then upper', () => {
    const word = 'DaKH DauGHTerS GaNNuSYa';

    expect(fixStringCase(word)).toBe('DAKH DAUGHTERS GANNUSYA');
  });
  it('should transform to upperCase when lower case characters less then upper', () => {
    const word = 'INSHe Misto';

    expect(fixStringCase(word)).toBe('inshe misto');
  });
});