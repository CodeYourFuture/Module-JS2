const tally = require("./tally.js");
/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a','a','a']), target output: { a: 3 }
 * tally(['a','a','b','c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("test tally to return object containing the count for each unique item", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
  expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("test tally to return an empty object for an empty array", () => {
  expect(tally([])).toEqual({});
});


// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("test tally to return counts for each unique item in the array with duplicates", () => {
  expect(tally(["a", "b", "a", "b", "c", "a"])).toEqual({ a: 3, b: 2, c: 1 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("test tally to return an error for invalid input (non-array)", () => {
  const invalidInput = 'invalid';
  const result = tally(invalidInput);
  expect(result).toBe('Invalid input. Please provide an array.');
  
});