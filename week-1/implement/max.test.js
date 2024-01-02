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

const getMax = require("./max.js");

describe("getMax", () => {
  test("returns infinity for empty array", () => {
    expect(getMax([])).toBe(-Infinity);
  });

  test("returns the number in the array if there's 1 number", () => {
    expect(getMax([5])).toBe(5);
    expect(getMax([8])).toBe(8);
  })

  test("returns the positive max number in the array", () => {
    expect(getMax([5, 9, -4, -1, 2])).toBe(9);
  })  

  test("returns the largest decimal number in the array", () => {
    expect(getMax([0.5, 0.9, 0.4, 0.1, 0.2])).toBe(0.9);
  })  

  test("returns the largest number in array with numerical and non-numerical value", () => {
    expect(getMax([3, 7, 'hi', 1, 'bye'])).toBe(7);
  }) 

});