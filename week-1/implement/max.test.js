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


//inaro khodam vared kardam-->


const findMaximumNum = require('./max.js');

test("given an empty array, returns -Infinity", () => {
  expect(findMaximumNum([])).toBe(-Infinity);
});

test('given an array with one number, returns that number', () => {
  expect(findMaximumNum([5])).toBe(5);
});

test('given an array positive and negative numbers, returns the largest number overall', () => {
  expect(findMaximumNum([-1, 0, 10, 20, -5])).toBe(20);
});

test('given an array with decimal numbers, returns the largest decimal number', () => {
  expect(findMaximumNum([1.5, 2.3, 1.2, 2.5])).toBe(2.5);
});

test('given an array with non-number values, returns the max and ignores non-numeric values', () => {
  expect(findMaximumNum(["@", 10, "hi", 60, 10])).toBe(60);
});
