/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
const sum = require("./sum.js");

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
describe("sum", () => {
  test("Given an empty array, then it should return 0", () => {
    expect(sum([])).toEqual(0);
  });

  test("Given an array with just one number, then it should return that number", () => {
    expect(sum([1])).toEqual(1);
  });

  test("Given an array containing negative numbers, then it should still return the correct total sum", () => {
    expect(sum([1, 2, 3, -3])).toEqual(4);
  });

  test("Given an array with decimal/float numbers, then it should return the correct total sum", () => {
    expect(sum([1.5, 3, 2.5]).toEqual(7));
  });

  test("Given an array containing non-number values, then it should ignore the non-numerical values and retur the sum of the numerical elements", () => {
    expect(sum(["hi", 1, 4, 2, "bye"])).toEqual(7);
  });
});
