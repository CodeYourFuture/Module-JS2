/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

const sumNumber = require("./sum.js");

test("given an empty array, returns 0", () => {
    expect(sumNumber([])).toBe(0);
  });

  test("given an array with one number, returns that number", () => {
    expect(sumNumber([6])).toBe(6);
    expect(sumNumber([10])).toBe(10);
  });

  test("an array with negative numbers, return the correct total sum", () => {
    expect(sumNumber([-2, -5, -1, -3])).toBe(-11);
    expect(sumNumber([-2, 4, 1.8, 0])).toBe(3.8);
});

test("an array with decimal numbers, return the correct total sum", () => {
    expect(sumNumber([1.2, 0.4, 0.6, 0.4])).toBe(2.6);
});

test("ignore the non-numerical values, return the sum of numerical elements", () => {
    expect(sumNumber([1, `h`, 2, 5, `e`])).toBe(8);
});