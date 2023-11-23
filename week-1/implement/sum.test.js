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

const calculateSum = require("./sum.js");

test("given an empty array, returns 0", () => {
    expect(calculateSum([])).toBe(0);
  });

  test("given an array with one number, returns that number", () => {
    expect(calculateSum([9])).toBe(9);
  });

  test("given an array containing negative numbers, return the correct total sum", () => {
    expect(calculateSum([-8, 2, -7, 1])).toBe(-12);
});

test("given an array containing decimal numbers, return the correct total sum", () => {
    expect(calculateSum([1.8, 2.2, 1.2, 2.4])).toBe(7.6);
});

test("ignore the non-numerical values, return the sum of numerical elements", () => {
    expect(calculateSum([9, '@', 8, 3, 'Zar'])).toBe(20);
});