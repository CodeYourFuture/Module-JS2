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

const {compareNum, max} = require("./max");

// test 1
test("given an empty array, returns -Infinity ", function () {
    const emptyArray = []
  expect(max(emptyArray)).toBe("-Infinity");
});

// test 2
test("Given an array with one number, returns that number ", function () {
    const oneNumList = [8]
  expect(max(oneNumList)).toBe(8);
});

// test 3
test("Given an array with both positive and negative numbers, returns the largest number overall ", function () {
    const mixNums = [10, -8, 4, 5, 500, 60, 20, -50, 3];
  expect(max(mixNums)).toBe(500);
});


// test 4
test("Given an array with decimal numbers, returns the largest decimal number ", function () {
    const decimalArray = [0.01,0.3,5.4,2.7];
  expect(max(decimalArray)).toBe(5.4);
});

// test 5
test("Given an array with non-number values, returns the max and ignore non-numeric values ", function () {
    const arrayWithNonNumeric = [10, "hey", true, 4, 5, false, 500,60, 20, "a", -50, "z", 3];
      expect(max(arrayWithNonNumeric)).toBe(500);
});