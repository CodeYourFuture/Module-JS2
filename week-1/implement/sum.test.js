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

const sum = require("./sum");

test("given an empty array, returns 0", () => {
  const mySumArr = sum([]);
  expect(mySumArr).toBe(0);
});

test("given an array with just one number, return that number", () => {
  const mySumArr = sum([3]);
  expect(mySumArr).toBe(3);
});

test("given an array containing negative numbers, return the correct total of sum", () => {
  const mySumArr = sum([-3, -34, -6, -8]);
  expect(mySumArr).toBe(-51);
});

test("given an array with decimal/float numbers, return the correct total of sum", () => {
  const mySumArr = sum([-0.0004, -0.0009, -0.0029, -0.00042]);
  expect(mySumArr).toBe(-0.00462);
});

test("given an array containing non-number values, should ignore the non-numerical values and return the sum of the numerical elements", () => {
  const mySumArr = sum(["hey", 10, "hi", 60, 10]);
  expect(mySumArr).toBe(80);
});