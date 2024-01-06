/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

const max = require("./max.js");

test("given an empty array, returns -Infinity", () => {
  const input = [];
  const result = max(input);
  expect(result).toBe(-Infinity);
});

test("given an array with one number, returns that number", () => {
  const input = [42];
  const result = max(input);
  expect(result).toBe(42);
});

test("given an array with both positive and negative numbers, returns the largest number overall", () => {
  const input = [30, -10, 50, 20, -5];
  const result = max(input);
  expect(result).toBe(50);
});

test("given an array with decimal numbers, returns the largest decimal number", () => {
  const input = [1.5, 2.3, 0.8, 4.7];
  const result = max(input);
  expect(result).toBe(4.7);
});

test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
  const input = [10, 'hello', 20, 'world', '42', true, false];
  const result = max(input);
  expect(result).toBe(20);
});
