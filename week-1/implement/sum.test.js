/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

const sum = require("./sum");

// test 1
test("given an empty array, returns 0 ", function () {
    const emptyArray = []
  expect(sum(emptyArray)).toBe(0);
});

// test 2
test("Given an array with one number, returns that number ", function () {
    const oneNumList = [8]
  expect(sum(oneNumList)).toBe(8);
});

// test 3
test("Given an array with negative numbers, returns the correct total sum ", function () {
  const numWithNegative = [10, -8, 4, 5, 60, 20, -50, 3];
  expect(sum(numWithNegative)).toBe(44);
});


// test 4
test("Given an array with decimal/float numbers, returns correct total sum", function () {
  const decimalArray = [0.01, 0.3, 5.4, 2.7];
  expect(sum(decimalArray)).toBe(8.41);
});

// test 5
test("Given an array with non-number values, returns the total sum and ignore non-numeric values ", function () {
    const arrayWithNonNumeric = [10, "hey", true, 4, 5, false,40, 20, "a", -50, "z", 3];
      expect(sum(arrayWithNonNumeric)).toBe(32);
});