
const findMaxNumber = require('./max');
// Assuming both files are in the same directory

// Your test cases go here
 
// Adjust the path accordingly if your files are in different directories

// Your test cases go here

/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
//test.todo("given an empty array, returns -Infinity");

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

//......................................................................
//ANSWER

test("given an empty array, returns -Infinity", () => {
  const result = findMaxNumber([]);
  expect(result).toBe(-Infinity);
});

test("given an array with one number, returns that number", () => {
  const result = findMaxNumber([42]);
  expect(result).toBe(42);
});

test("given an array with both positive and negative numbers, returns the largest number overall", () => {
  const result = findMaxNumber([10, -5, 7, -20, 15]);
  expect(result).toBe(15);
});

test("given an array with decimal numbers, returns the largest decimal number", () => {
  const result = findMaxNumber([1.5, 3.7, 2.8, 1.2]);
  expect(result).toBe(3.7);
});

test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
  const result = findMaxNumber(['hey', 10, 'hi', 60, 10]);
  expect(result).toBe(60);
});
