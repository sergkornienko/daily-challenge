const { areaOrPerimeter } = require('./index');

describe('areaOrPerimeter', () => {
  it('should return area when square', () => {
    expect(areaOrPerimeter(4, 4)).toBe(16);
    expect(areaOrPerimeter(5, 5)).toBe(25);
    expect(areaOrPerimeter(10, 10)).toBe(100);
  });
  it('should return perimiter when rectangle', () => {
    expect(areaOrPerimeter(6, 10)).toBe(32);
    expect(areaOrPerimeter(20, 10)).toBe(60);
    expect(areaOrPerimeter(3, 18)).toBe(42);
  });
});
