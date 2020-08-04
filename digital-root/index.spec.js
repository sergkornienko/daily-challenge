const { digitalRoot } = require('./index');

describe('digitalRoot', () => {
  it('should return sum of digit', () => {
    expect(digitalRoot(16)).toEqual(7);
  });
  it('should return sum of digit when first result more than 10', () => {
    expect(digitalRoot(942)).toEqual(6);
    expect(digitalRoot(132189)).toEqual(6);
    expect(digitalRoot(493193)).toEqual(2);
  });
});