/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/
const max = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity

test("given an empty array, returns -Infinity", () => {
    expect(max([])).toBe(-Infinity);
  });

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("given an array with one number, returns number", () => {
  expect(max([2])).toBe(2);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("given an array with both positive and negative number, returns max", () => {
  expect(max([-7, 6, 4, -3])).toBe(6);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("given an array with decimal number, returns max", () => {
  expect(max([7.6, 1.6, 9.4, 3.4])).toBe(9.4);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values


test("given an array with non-number values, returns max, ignore non-numeric values", () => {
  expect(max(["17", 12, "c", 5.4])).toBe(12);
});