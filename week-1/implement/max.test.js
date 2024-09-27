/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity

const max = require("./max");

test("given an empty array returns -infinity", function () {
  expect(max([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("given an array with one number, returns that number", function () {
  expect(max([2])).toBe(2);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("given an array with + & - numbers it returns the largest number overall", function () {
  expect(max([-1, 2, 25, -3, 0])).toBe(25);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("returns the largest from a decimal number array", function () {
  expect(max([1.1, 2.3, 25.8, 3.9, 0.3])).toBe(25.8);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("seperates strings from numbers and then identifies the largest number", function () {
  expect(max(["hi", 2.3, 62, "q", 3.9, 0.3])).toBe(62);
});
