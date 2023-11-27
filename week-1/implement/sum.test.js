/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:
const sum = require("./sum.js");
describe ('sum' , () => {
// Given an empty array
// When passed to the sum function
// Then it should return 0
 test('given an empty array, returns 0' , () => {
  expect(sum([])).toBe(0);
 })

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test('given an array with just one number, returns that number' , () => {
  expect(sum([5])).toBe(5);
})
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test('given an array containing negative numbers, returns correct total sum' , () => {
  expect(sum([-4 , -2 , -5])).toBe(-11);
})
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test('given an array with decimal numbers, returns correct total sum' , () => {
  expect(sum([2.5 , 3.5])).toBe(6);
})
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements.
test('given an array containing non-number values, returns the sum of the numerical elements and ignore the non-numerical values' , () => {
  expect(sum(['hi' , 2 , 'she' , 6])).toBe(8);
})

});
