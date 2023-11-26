/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/
const max = require("./max.js");
// Given an empty array
// When passed to the max function
// Then it should return -Infinity
describe ('max' , () => {
  test ('given an empty array, returns -Infinity' , () => {
    expect (max([])).toBe(-Infinity);
  })
// Given an array with one number
// When passed to the max function
// Then it should return that number
  test('given an array with one number, returns that number' , () => {
    expect(max([30])).toBe(30);
  })
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
  test('given an array with both positive and negative numbers, returns the largest number' , () => {
    expect(max([40 , -60])).toBe(40);
  })
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
  test('given an array with decimal numbers, returns the largest decimal number' , () => {
    expect(max([9.5 , -7.3 ,0.2])).toBe(9.5);
  })

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
  test('given an array with non-number values, returns the max and ignore non-numeric values' , () => {
    expect(max(['hat' , 'freedom' , 1 , 14])).toBe(14);
  })

});


