/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

test("given an empty array, returns 0 ", () => {
  expect(sum([])).toBe(0);
});


// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("given an array with just one number, returns that number ", () => {
  expect(sum([12])).toBe(12);
});


// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given an array with both positive and negative number, returns correct total sum ", () => {
  expect(sum([-7, 6, 4, -3])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("given an array with decimal number, returns the correct total sum", () => {
  expect(sum([7.6, 1.6, 9.4, 3.4])).toBe(22);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("given an array with non-number values, returns the sum of the numerical elements, ignore non-numeric values", () => {
  expect(sum(["17", 12, "c", 5.4])).toBe(17.4);
});