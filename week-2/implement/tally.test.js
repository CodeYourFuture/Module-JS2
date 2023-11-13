const tally = require("./tally.js")
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
test("returns the count of each unique item when given an array of items", () => {
  expect(tally(["a","b","c"])).toEqual({a: 1, b: 1, c: 1});
  expect(tally(["m","d","s","p"])).toEqual({m: 1, d: 1, s:1, p: 1});
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("returns empty object when given an empty array as the input", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("returns the count of each unique item when given an array with duplicate items", () => {
  expect(tally(["a", "b", "a", "c", "c"])).toEqual({ a: 2, b: 1, c: 2 });
  expect(tally(["m", "m", "p", "d", "s", "d", "d", "p"])).toEqual({ m: 2, d: 3, s: 1, p: 2 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("throws an error when given an invalid input which is not an array", () => {
  expect(tally("a","b")).toEqual("Invalid input");
  expect(tally(5, 6)).toEqual("Invalid input");
});
