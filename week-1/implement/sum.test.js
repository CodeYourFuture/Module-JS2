const sumNumbers = require('./sum');
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

//..............................................................................
//ANSWER



test("given an empty array, returns 0", () => {
  const result = sumNumbers([]);
  expect(result).toBe(0);
});

test("given an array with just one number, returns that number", () => {
  const result = sumNumbers([42]);
  expect(result).toBe(42);
});

test("given an array containing negative numbers, returns the correct total sum", () => {
  const result = sumNumbers([10, -5, 7, -20, 15]);
  expect(result).toBe(7);
});

test("given an array with decimal/float numbers, returns the correct total sum", () => {
  const result = sumNumbers([1.5, 3.7, 2.8, 1.2]);
  expect(result).toBe(9.2);
});

test("given an array containing non-number values, ignores them and returns the sum of numerical elements", () => {
  const result = sumNumbers(['hey', 10, 'hi', 60, 10]);
  expect(result).toBe(80);
});
