/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test.todo("given an empty array, returns -Infinity");

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

const max = require("./max");
describe("max function", () => {
  test("given an empty array,returns -infinity", () => {
    expect(max([])).toBe(-Infinity);
  });
  test("given an array with one number, returns that number", () => {
    expect(max([6])).toBe(6);
  });
  test("given an array with both positive and negative number,returns the largest number", () => {
    expect(max([1, 3, -7, 6, -8])).toBe(6);
  });
  test("given an array with decimal number,returns the largest decimal number", () => {
    expect(max([1.3, 1.4, 1.2, 2.5])).toBe(2.5);
  });
  test("given an array with non-number values,returns the max and ignore non-numeric values", () => {
    expect(max([1, 3, "hey", 5, "hello"])).toBe(5);
  });
});
