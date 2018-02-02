const analyse = require('./analyse');

describe('analyse', () => {
  it('finds the minimum value of an array', () => {
    expect(analyse([14, 2, 33, 17 ,21]).min).toBe(2);
  });
  it('finds the maximum value of an array', () => {
    expect(analyse([1, 9, 19, 17 ,6]).max).toBe(19);
  });
  it('correctly calculates the average of an array', () => {
    expect(analyse([1, 9, 10, 25 ,5]).average).toBe(10);
  });
  it('calculates averages when they are decimal number', () => {
    expect(analyse([1, 27, 8 ,9, 4, 7]).average).toBeCloseTo(9.33);
  });
  it('returns the length of the array', () => {
    expect(analyse([4, 4, 5, 90, 1 ,5]).length).toBe(6);
  });
  it('takes an array and returns an obect', () => {
      expect(analyse([6, 1, 15, 2])).toEqual({"average": 6, "length": 4, "max": 15, "min": 1});
  });
});