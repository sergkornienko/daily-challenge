const { overTheRoad } = require('./index');

describe('overTheRoad', () => {
  it('should return number of house from oposite side', () => {
    expect(overTheRoad(1, 3)).toBe(6);
    expect(overTheRoad(3, 3)).toBe(2);
    expect(overTheRoad(3, 5)).toBe(6);
    expect(overTheRoad(7, 11)).toBe(10);
  });
});
