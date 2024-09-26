/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

const maxNum = require("./max.js")

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test("given an empty array, returns -Infinity", function () {
    expect(maxNum([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number it will return that number", function () {
    expect(maxNum([87])).toBe(87);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
// test.todo("given an array with both positive and negative numbers it wi")

test("given an array with one number it will return that number", function () {
    expect(maxNum([-2, -3, -8, -87])).toBe(-2);
    expect(maxNum([2, -3, 8, -87])).toBe(8);
  
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("given an array with one number it will return that number", function () {
  expect(maxNum([2.6, 3.85, 8.78, 8.79])).toBe(8.79);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test("given an array with one number it will return that number", function () {
    expect(maxNum([2, "asda", "belw", 87])).toBe(87);
});