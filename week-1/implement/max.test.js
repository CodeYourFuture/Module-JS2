/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

const findMax = require("./max.js");

describe("findMax function", () => {
  test("given an empty array, returns -Infinity", () => {
    const emptyArray = [];
    expect(findMax(emptyArray)).toBe(-Infinity);
  });

  // Given an empty array
  // When passed to the max function
  // Then it should return -Infinity
  //test.todo("given an empty array, returns -Infinity");
  //..................................................................................

  test("given an array with one number, returns that number", () => {
    const arrayOneNumber = [67];
    expect(findMax(arrayOneNumber)).toBe(67);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  //................................................................................
  test("given an array with positive and negative numbers, returns the largest number", () => {
    const arrayPositiveNegative = [17, -9, 5, 28, -3];
    expect(findMax(arrayPositiveNegative)).toBe(28);
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  //.....................................................................................

  test("given an array with decimal numbers, returns the largest decimal number", () => {
    const arrayDecimal = [3.14, 1.618, 2.718, 0.577];
    expect(findMax(arrayDecimal)).toBe(3.14);
  });
  //.........................................................................................
  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number

  test("given an array with non-number values, returns the max numeric value, ignores non-numeric values", () => {
    const arrayMixed = ["hello", 10, "hi", 64, 10, "london", "!", "@", "#"];
    expect(findMax(arrayMixed)).toBe(64);
  });
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
//.........................................................................................
