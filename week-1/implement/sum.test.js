const sum = require("./sum")

/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test('Empty array input, should return 0', () => {
  expect(sum([])).toBe(0)
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test('Array with one number, should return that number', () => {
  expect(sum([10])).toBe(10);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test('Array with negative numbers, should return the correct total sum', () => {
  expect(sum([-10, -20, -30])).toBe(-60);
  expect(sum([-10, -20, 30, -40])).toBe(-40);
})

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test('Array with decimal/float numbers, should return the correct total sum', () => {
  expect(sum([10.5, 20.5, 30.5])).toBe(61.5);
  expect(sum([10.5, 20.5, 30.5, 40.5])).toBe(102)
})

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test('Array with non-numerical values, should ignore the non-numerical values and return the sum of the numerical elements', () => {
  expect(sum([10, 'hi', 30, 'hello'])).toBe(40);
  expect(sum([10, 'lambda', 30, 'nice', 50])).toBe(90);
  expect(sum([10, 'cool', 30, 'happy', 50, 60])).toBe(150);
})
