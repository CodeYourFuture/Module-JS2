const max = require("./max.js");
/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test.todo("given an empty array, returns -Infinity");
test("given an empty array, returns -Infinity", () => {
  const result = max([]);
  expect(result).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  const result = max([10]);
  expect(result).toBe(10);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with positive and negative numbers, returns the largest number overall", () => {
  const result = max([-5, 8, 2, -10, 15]);
  expect(result).toBe(15);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
  const result = max([3.14, 1.5, 2.7, 0.8]);
  expect(result).toBe(3.14);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
  const result = max(["hey", 10, "hi", 60, 10]);
  expect(result).toBe(60);
});
