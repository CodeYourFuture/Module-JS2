/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

const max = require("./max.js");


// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test("given an empty array, it returns -Infinity", () => {
    const input = [];
    const result = max(input);
    expect(result).toBe(-Infinity);
  });

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("given an array with one number, it returns that number", () => {
    const input = [42];
    const result = max(input);
    expect(result).toBe(42);
  });


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("given an array with both positive and negative numbers, it returns the largest number overall", () => {
    const input = [10, -5, 20, 0, -15];
    const result = max(input);
    expect(result).toBe(20);
  });

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("given an array with decimal numbers, it returns the largest decimal number", () => {
    const input = [2.5, 1.1, 3.0, 2.7];
    const result = max(input);
    expect(result).toBe(3.0);
  });

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("given an array with non-number values, it returns the max and ignores non-numeric values", () => {
    const input = ['hey', 10, 'hi', 60, 10, 'oops', '42.5'];
    const result = max(input);
    expect(result).toBe(60);
  });
