const { cost } = require('./index');

describe('cost', () => {
  it('should return 30 for the first hour', () => {
    expect(cost(45)).toBe(30);
    expect(cost(60)).toBe(30);
    expect(cost(55)).toBe(30);
    expect(cost(20)).toBe(30);
    expect(cost(30)).toBe(30);
  });
  it('should add 10 for every 30 min after first hour', () => {
    expect(cost(80)).toBe(40);
    expect(cost(135)).toBe(60);
    expect(cost(221)).toBe(90);
    expect(cost(70)).toBe(40);
    expect(cost(500)).toBe(180);
  });
  it('should be free for 5 min', () => {
    expect(cost(5)).toBe(0);
    expect(cost(65)).toBe(30);
    expect(cost(95)).toBe(40);
    expect(cost(125)).toBe(50);
    expect(cost(155)).toBe(60);
  });
});
