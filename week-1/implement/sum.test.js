/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

const sum = require("./sum.js");
// Given an empty array

describe("Sum Function", () => {
  test("an empty array, it should return 0", () => {
    const emptyArray = [];

    // When passed to the sum function
    const result = sum(emptyArray);
    // Then it should return 0
    expect(result).toBe(0);
  });
  //.................................................

  test("an array with just one number, it should return that number", () => {
    // Given an array with just one number
    const arrayWithOneNumber = [7];
    // When passed to the sum function
    const result = sum(arrayWithOneNumber);
    // Then it should return that number
    expect(result).toBe(7);
  });
  //...........................................

  test("an array containing negative numbers, it should return the correct total sum", () => {
    const arrayNegativeNumbers = [-3, 7, -2];
    const result = sum(arrayNegativeNumbers);
    expect(result).toBe(2);
  });
  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum
  //.........................................................

  test("an array with decimal/float numbers, it should return the correct total sum", () => {
    const arrayDecimalFloatNumbers = [1.5, 2.5, 3];
    const result = sum(arrayDecimalFloatNumbers);
    expect(result).toBe(7);
  });

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum
  //..........................................................

  test("an array containing non-number values, it should ignore non-numerical values and return the sum of numerical elements", () => {
    const arrayWithNonNumberValues = ["hey", 10, "hi", 60, 10];
    const result = sum(arrayWithNonNumberValues);
    expect(result).toBe(80);
  });
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
