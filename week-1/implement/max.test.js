/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/
const findMaximumNum = require(`./max.js`);

test("Given an empty array return -Infinity", () => {
    expect(findMaximumNum([])).toBe(-Infinity);
  });

  test("Given an array with one number return that number", () => {
    expect(findMaximumNum([9])).toBe(9);
  });

  test("Given an array with both positive and negative numbers return the largest number overall ", () => {
    expect(findMaximumNum([9, 2, -3, 6, -5])).toStrictEqual(9);
  });

  test(" Given an array with decimal numbers return the largest decimal number ", () => {
    expect(findMaximumNum([0.76, 1.88, 0.44, 0.32, 0.85])).toStrictEqual(1.88);
  });

  test("Given an array with non-number values return the max and ignore non-numeric values ", () => {
    expect(findMaximumNum([14, 78, "w", 8, "$"])).toStrictEqual(78);
  });

  
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
