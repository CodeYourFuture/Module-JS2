/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/
const maxNum = require("./max.js");

test.todo("given an empty array, returns -Infinity");
describe("maxNum", () => {
  // Given an empty array
  // When passed to the max function
  // Then it should return -Infinity
  test("given an empty array, returns -Infinity", () => {
    expect(maxNum([])).toEqual(-Infinity);
  });
  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  test("given an empty array, returns -Infinity", () => {
    expect(maxNum([1])).toEqual(1);
  });
  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  test("given an empty array, returns -Infinity", () => {
    expect(maxNum([1, 2, -7, 5, -3, 3, 0])).toEqual(5);
  });
  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  test("given an empty array, returns -Infinity", () => {
    expect(maxNum([1.5, 6.8, 6.9, 6.90000001, 6.90001, 5])).toEqual(6.90001);
  });
  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  test("given an empty array, returns -Infinity", () => {
    expect(maxNum(["a", 1, "b", "m", [1, 6, 7, 8, "a"], "b"])).toEqual(1);
  });
});
