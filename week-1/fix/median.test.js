// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toBe(2);
    expect(calculateMedian([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateMedian([1, 2, 3, 4, 5,6,7])).toBe(4);
    expect(calculateMedian([1, 2, 3, 4, 5,6,7,8,9])).toBe(5);
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toBe(3.5);
    expect(calculateMedian([5, 8, 13,34,65,71,80,93])).toBe(49.5);
    expect(calculateMedian([2,5,7,12,20,34])).toBe(9.5);
  });
  
  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);
    expect(list).toEqual([1, 2, 3]);
  });
});
