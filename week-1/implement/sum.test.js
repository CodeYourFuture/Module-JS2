const sum = require("./sum.js");
/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  const result = sum([]);
  expect(result).toBe(0);
});


// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns that number", () => {
  const result = sum([10]);
  expect(result).toBe(10);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, returns the correct total sum", () => {
  const result = sum([-5, 8, 2, -10, 15]);
  expect(result).toBe(10);
});


// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
  const result = sum([3.14, 1.5, 2.7, 0.8]);
  expect(result).toBe(8.14);
});


// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, ignores non-numerical values and returns the sum of the numerical elements", () => {
  const result = sum(["hey", 10, "hi", 60, 10]);
  expect(result).toBe(80);
});
