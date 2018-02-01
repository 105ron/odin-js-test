const calculator = require('./calculator');
const calc = calculator();

describe('calculator', () => {
  it('sums two numbers', () => {
      expect(calc.add(2, 2)).toBe(4);
  });
  it('sums numbers that are decimals', () => {
    expect(calc.add(1.7, 2.92)).toBe(4.62);
  });
  it('subtracts two numbers', () => {
    expect(calc.subtract(4, 3)).toBe(1);
  });
  it('subtracts two numbers that are decimals', () => {
    expect(calc.subtract(4.2, 1)).toBe(3.2);
  });
  it('subtracting a negative number adds it', () => {
    expect(calc.subtract(3, -2)).toBe(5);
  });
  it('subtracting zero returns the original number', () => {
    expect(calc.subtract(3, 0)).toBe(3);
  });
  it('divides two numbers', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });
  it('divides by a decimal', () => {
    expect(calc.divide(10, 0.5)).toBe(20);
  });
  it('returns a negative when you divide by a negative number', () => {
    expect(calc.divide(10, -4)).toBe(-2.5);
  });
  it('multiples two numbers', () => {
    expect(calc.multiply(10, 2)).toBe(20);
  });
  it('multiples by a decimal', () => {
    expect(calc.multiply(10, 0.5)).toBe(5);
  });
  it('returns a negative when you mulitply by a negative number', () => {
    expect(calc.multiply(10, -3)).toBe(-30);
  });
});