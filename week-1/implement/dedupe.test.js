const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:
describe ('dedupe' , () => {
// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test('given an empty array, it returns an empty array' , () => {
  expect(dedupe([])).toEqual([]);
})
// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test('given an array with no duplicates, returns a copy of the original array' , () => {
  expect(dedupe([3, 4, 5])).toEqual([3, 4, 5]);
})
// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values
test('given an array with strings or numbers, removes the duplicate values' , () => {
  expect(dedupe(['hi', 'hi' ,'hi'])).toEqual(['hi']);
  expect(dedupe([2, 2, 3, 3, 5, 5])).toEqual([2, 3, 5])
})
});





