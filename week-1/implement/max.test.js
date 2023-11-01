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

const findMaximumNumber = require('./max');

test("returns infinity if array is empty", () => {
    expect(findMaximumNumber([])).toBe("Infinity");
});

test("Given an array with one number it should return that number", () => {
    expect(findMaximumNumber([19])).toBe(19);
});

test("return the largest number overall if array has both positive and negative numbers", () => {
    expect(findMaximumNumber([19, -3, 5, -8, -11, 78])).toBe(78);
});
test("return the largest decimal number if array has decimal numbers", () => {
    expect(findMaximumNumber([0.4, 0.78, 0.1, 0.43, 0.5])).toBe(0.78);
});
test("Skip non-number and return the maximum number in an array", () => {
    expect(findMaximumNumber([10, 20,"@", 5,"b" ,80])).toBe(80);
    expect(findMaximumNumber([99, 45, 232, 5, 67, 87, 34])).toBe(232);
});

test("returns maximum value in an number array", () => {
    expect(findMaximumNumber([10, 20, 5, 80])).toBe(80);
    expect(findMaximumNumber([99, 45, 232, 5, 67, 87, 34])).toBe(232);
});
