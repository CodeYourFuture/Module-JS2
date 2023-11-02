/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
const calculateSum = require("./sum.js")
// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("returns total as 0 when given an empty array ", () => {
  expect(calculateSum([])).toBe(0);
  
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("returns the same number when given an array with just one number", () => {
  expect(calculateSum([-9])).toBe(-9);
  expect(calculateSum([12])).toBe(12);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("returns the correct total when given an array with negative numbers", () => {
  expect(calculateSum([2, -9, 6])).toBe(-1);
  expect(calculateSum([-8, -12, -3])).toBe(-23);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("returns the correct total when given an array with decimal/float numbers", () => {
  expect(calculateSum([5.9, 1.6, 3.55])).toBe(11.05);
  expect(calculateSum([6.89, 12.4, 7.8])).toBe(27.09);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("ignores non-numerical characters and returns the sum of the numbers", () => {
  expect(calculateSum([5, "m", 3])).toBe(8);
  expect(calculateSum(["&", 12, 8])).toBe(20);
});
