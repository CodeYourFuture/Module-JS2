/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sumOfArray = require("./sum");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

test("returns 0 in the case of an empty array", function () {
  expect(sumOfArray([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("returns arrays number if only one number specified in array", function () {
  expect(sumOfArray([1])).toBe(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("returns sum addition even if array contains negative numbers", function () {
  expect(sumOfArray([2, 3, -5])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("returns sum of decimal/float numbers array", function () {
  expect(sumOfArray([2.5, 1.5, 3.2])).toBe(7.2);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("removes non numbers from array and returns sum addition", function () {
  expect(sumOfArray([2.5, 1.5, 3.2, "hello", "my", "names", "marcus"])).toBe(
    7.2
  );
});
