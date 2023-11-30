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

test("given an empty array, it returns 0", () => {
    const input = [];
    const result = sum(input);
    expect(result).toBe(0);
  });
  

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("given an array with just one number, it returns that number", () => {
    const input = [42];
    const result = sum(input);
    expect(result).toBe(42);
  });
  

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given an array containing negative numbers, it returns the correct total sum", () => {
    const input = [10, -5, 20, 0, -15];
    const result = sum(input);
    expect(result).toBe(10);
  });
  

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("given an array with decimal/float numbers, it returns the correct total sum", () => {
    const input = [2.5, 1.1, 3.0, 2.7];
    const result = sum(input);
    expect(result).toBe(9.3);
  });
  

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("given an array containing non-number values, it ignores non-numerical values and returns the sum of the numerical elements", () => {
    const input = ['hey', 10, 'hi', 60, 10, 'oops', '42.5'];
    const result = sum(input);
    expect(result).toBe(80);
  });