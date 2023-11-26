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

const findMax = require('./max');

test("return infinity if array is empty", () => {
    expect(findMax([])).toBe("infinity");
});

test("Given an array with one number, return that number", () => {
    expect(findMax([8])).toBe(8);
});

test("Given array with both positive and negative numbers, return the largest number overall", () => {
    expect(findMax([-57, 16, -34, 60, -45])).toBe(60);
});
test("Given an array with decimal numbers, return the largest decimal number", () => {
    expect(findMax([0.5, 2.65, 0.81, 1.56])).toBe(2.65);
});

test("Given an array with non-number, skip non-number and return the maximum number", () => {
    expect(findMax([6, "@", 87, "!", 8, 23])).toBe(87);
});
