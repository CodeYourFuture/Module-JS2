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
describe("max", () => {
  test("Given an empty array, return -Infinity", () => {
    expect(max([])).toEqual(-Infinity);
  });

  test("Given an array with one number, then it should return that number", () => {
    expect(max([1])).toEqual(1);
  });

  test("Given an array with both positive and negative numbers, then it should return the largest number overall", () => {
    expect(max([1, -1, 3, -5, 7, -8])).toEqual(7);
  });

  test("Given an array with decimal numbers, then it should return the largest decimal number", () => {
    expect(max([0.1, 1.2, 5.5, 7.89])).toEqual(7.89);
  });

  test("Given an array with non-number values, then it should return the max and ignore non-numeric values", () => {
    expect(max(["a", 1, 5, 9, "hi"])).toEqual(9);
  });
});
