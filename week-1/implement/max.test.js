/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// test.todo("given an empty array, returns -Infinity");

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

const {numSort,max} = require("./max");

test("given an empty array, returns -Infinity", () => {
    let maximum = [];
  expect(max(maximum)).toBe("-Infinity");
});

test("given an array with one number, returns that number", () => {
  const maximum = [5];
  expect(max(maximum)).toBe(5);
});

test("given an array with both positive and negative numbers, returns the largest number overall", () => {
  const maximum = [3, 0, 5, -1, 7, -8];
  expect(max(maximum)).toBe(7);
});

test("given an array with decimal numbers, returns the largest decimal number", () => {
  const maximum = [3.7, 1.5, 0.5, 7.5, 5.2, 4.1];
  expect(max(maximum)).toBe(7.5);
});

test("given an array with non-number values, return the max and ignore non-numeric values", () => {
  const maximum = [9, 3.7, 10, 0, -4, 2, "t"];
  expect(max(maximum)).toBe(10);
});