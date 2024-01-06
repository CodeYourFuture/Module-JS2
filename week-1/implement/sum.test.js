/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

describe("sum() sums the numerical elements of an array", () => {
  // Given an empty array
  // When passed to the sum function
  // Then it should return 0
  test("Given an empty array, Then it should return 0", () => {
    expect(sum([])).toEqual(0);
  });
  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number
  test("Given an array with just one number, Then it should return that number", () => {
    expect(sum([1])).toEqual(1);
  });
  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  test("Given an array containing negative numbers, Then it should still return the correct total sum", () => {
    expect(sum([-1, -2, -3])).toEqual(-6);
  });
  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  test("Given an array with decimal/float numbers, Then it should return the correct total sum", () => {
    expect(sum([1.5, 3.55])).toEqual(5.05);
  });
  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements
  test("Given an array containing non-number values, Then it should ignore the non-numerical values and return the sum of the numerical elements", () => {
    expect(sum([1, 2, "a", "b", "c", 3])).toEqual(6);
  });
});
