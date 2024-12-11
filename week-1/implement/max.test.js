const max = require("./max")

/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array
(I believe that this description is a mistake)

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test('When empty array input, should return -Infinity', () => {
  expect(max([])).toBe("-Infinity")
})

// Given an array with one number
// When passed to the max function
// Then it should return that number
test('When one number input, should return that number', () => {
  expect(max([1])).toBe(1);
  expect(max([15])).toBe(15);
})

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test('When array with both positive and negative numbers, should return the largest number overall', () => {
  expect(max([10, 5, 15, 20, 30])).toBe(30);
  expect(max([-10, -5, -15, -20, -30])).toBe(-5);
  expect(max([-10, 5, -15, -20, 30])).toBe(30);
}
)

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test('When array with decimal numbers, should return the largest decimal number', () => {
  expect(max([10.5, 5.5, 15.5, 20.5, 30.5])).toBe(30.5);
  expect(max([-10.5, -5.5, -15.5, -20.5, -30.5])).toBe(-5.5);
  expect(max([-10.5, 5.5, -15.5, -20.5, 30.5])).toBe(30.5);
})

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test('When array with non-number values, should return the max and ignore non-numeric values', () => {
  expect(max([10, 5, 15, 20, 30, 'hello'])).toBe(30);
  expect(max([-10, -5, -15, -20, -30, 'hello'])).toBe(-5);
  expect(max([-10, 5, -15, -20, 30, 'hello'])).toBe(30);
})