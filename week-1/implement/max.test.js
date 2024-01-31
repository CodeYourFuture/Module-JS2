/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
const max = require("./max");

test("given an empty array, returns -Infinity", () => {
  expect(max([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("Given an array with one number, returns that number", () => {
  expect(max([4])).toEqual(4);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall


test("Given an array with both positive and negative numbers, returns the largest number overall", () => {
  expect(max([2, -3, 4, 5, 8])).toEqual(8);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("Given an array with decimal numbers, returns the largest number overall", () => {
  expect(max([9.67, 4.67, 5.9])).toEqual(9.67);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("Given an array with  non-number values, return the max and ignore non-numeric values", () => {
  expect(max([5, 3, "frgt"])).toEqual(5);
});