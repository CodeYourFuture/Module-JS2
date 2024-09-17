/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

const sum = require("./sum");
test("given an empty array, Then it should return 0", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("given array with just one number, Then it should that number", () => {
    expect(sum([2])).toEqual(2);
  });

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given array containing negative numbers, return the correct total sum", () => {
    expect(sum([2, 4, -6, 5])).toEqual(5);
  });

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given array  with decimal/float numbers, return the correct total sum", () => {
    expect(sum([34, 3.5, 5, 0.2])).toEqual(42.7);
  });

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("given array  with decimal/float numbers, return the correct total sum", () => {
    expect(sum([5, "er", 5, 0.2])).toEqual(10.2);
  });