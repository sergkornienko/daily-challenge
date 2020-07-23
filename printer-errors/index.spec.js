const { printer_error } = require('./index');

describe('printerErrors', () => {
  it('should return 0/n when all collors from a to m', () => {
    const colors = 'abcdefghjklm';
    const res = printer_error(colors);

    expect(typeof res).toBe('string');
    expect(res).toBe('0/12');
  });
  it('should return correct amount of errors when some collors not from a to m', () => {
    const colors = 'ppaqbczzzdxrstefghjkoolyyuuuvvwymn';
    const res = printer_error(colors);

    expect(typeof res).toBe('string');
    expect(res).toBe('22/34');
  });
});