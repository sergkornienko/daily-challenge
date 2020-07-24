const { nbYear } = require('./index');

describe('nbYear', () => {
  it('should incrace population on inhabitants comming every year(AUG) when percent 0', () => {
    const percent = 0;
    const aug = 100
    const initialPopulation = 1000;
    const expectedPopulation = 1500;

    expect(nbYear(initialPopulation, percent, aug, expectedPopulation)).toBe(5);
  });
  it('should return correct amount of yers when percent > 0', () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
  });
});