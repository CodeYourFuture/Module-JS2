/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test("given an empty array, returns -Infinity", () => {
  const result = findMax([]);
  expect(result).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  const result = findMax([12]);
  expect(result).toBe(12);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative number", () => {
  const result = findMax([-9, 15, 7, -43, 21]);
  expect(result).toBe(21);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, return the largest decimal number", () => {
  const result = findMax([2.8, 3.14, 0.1, 2.5]);
  expect(result).toBe(3.14);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, return the max and ignore non-numeric values", () => {
  const result = findMax(["apple", 10, "orange", 5, "banana"]);
  expect(result).toBe(10);
});
