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

const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
  const input = [];
  const result = sum(input);
  expect(result).toBe(0);
});

test("given an array with just one number, returns that number", () => {
  const input = [42];
  const result = sum(input);
  expect(result).toBe(42);
});

test("given an array containing negative numbers, returns the correct total sum", () => {
  const input = [-10, 20, -5, -15];
  const result = sum(input);
  expect(result).toBe(-10);
});

test("given an array with decimal/float numbers, returns the correct total sum", () => {
  const input = [1.5, 2.3, 0.8, 4.7];
  const result = sum(input);
  expect(result).toBeCloseTo(9.3); // Use toBeCloseTo for floating-point numbers
});

test("given an array containing non-number values, ignores non-numerical values and returns the sum of numerical elements", () => {
  const input = [10, 'hello', 20, 'world', '42', true, false];
  const result = sum(input);
  expect(result).toBe(80);
});
