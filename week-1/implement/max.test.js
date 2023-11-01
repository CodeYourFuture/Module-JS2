/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/
const getMaxNumber = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test.todo("given an empty array, returns -Infinity");
 test("returns -Infinity for an empty array", () => {
   expect(getMaxNumber([])).toBe(-Infinity);
 });

// Given an array with one number
// When passed to the max function
// Then it should return that number
 test("returns the number when given an array with only one number", () => {
   expect(getMaxNumber([4])).toBe(4);
   expect(getMaxNumber([-8])).toBe(-8);
 });

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("returns the largest number when given an array with positive and negative number", () => {
  expect(getMaxNumber([5, -9, 3])).toBe(5);
  expect(getMaxNumber([-8, 12, 78])).toBe(78);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("returns the largest decimal number when given an array with decimal numbers", () => {
  expect(getMaxNumber([9.89,4.56,3.9,21.6])).toBe(21.6);
  expect(getMaxNumber([5.99,2.01,8.6])).toBe(8.6);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("returns the max number and ignores the non-numeri", () => {
  expect(getMaxNumber([7,"i","*",6])).toBe(7);
  expect(getMaxNumber(["u",9,33,"k"])).toBe(33);
});
