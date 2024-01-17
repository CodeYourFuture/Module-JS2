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
const maxNumber = require("./max.js");

test("find the max number with non-number values", () => {
    const num = [30, 40, 'hey', -20, 23];
    const currentOutput = maxNumber(num);
    const targetOutput = 40;

    expect(currentOutput).toBe(targetOutput);
});
test("find the max number with only one number ", () => {
    const num = [30];
    const currentOutput = maxNumber(num);
    const targetOutput = 30;

    expect(currentOutput).toBe(targetOutput);
});
test("find the max number with only decimal number ", () => {
    const num = [30.7, 40.8, 'hey', -20.56, 40.9];
    const currentOutput = maxNumber(num);
    const targetOutput = 40.9;

    expect(currentOutput).toBe(targetOutput);
});
test("find the max number with empty number ", () => {
    const num = [];
    const currentOutput = maxNumber(num);
    const targetOutput = -Infinity;

    expect(currentOutput).toBe(targetOutput);
});

