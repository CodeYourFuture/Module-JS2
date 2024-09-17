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

const getSum = require("./sum.js");

describe("getSum", () => {
  test("returns 0 for empty array", () => {
    expect(getSum([])).toBe(0);
  });

  test("returns the number in the array if there's 1 number", () => {
    expect(getSum([5])).toBe(5);
    expect(getSum([8])).toBe(8);
  })

  test("returns the correct sum of numbers including negative numbers in the array", () => {
    expect(getSum([5, 9, -4, -1, 2])).toBe(11);
  })  

  test("returns the sum of decimal number in the array", () => {
    expect(getSum([0.5, 0.9, 0.4, 0.1, 0.2])).toBe(2.1);
  })  

  test("returns the sum in array with numerical and non-numerical value", () => {
    expect(getSum([3, 7, 'hi', 1, 'bye'])).toBe(11);
  }) 

});