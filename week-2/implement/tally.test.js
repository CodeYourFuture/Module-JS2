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

const tally = require("./tally");

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("tally returns an object containing the count for each unique item", () => {
  const inputArray = ["a", "b", "a", "c", "b"];
  const result = tally(inputArray);
  expect(result).toEqual({ a: 2, b: 2, c: 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally returns an empty object for an empty array", () => {
  const inputArray = [];
  const result = tally(inputArray);
  expect(result).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item
test("tally returns counts for each unique item", () => {
  const inputArray = ["a", "a", "b", "c", "c", "c"];
  const result = tally(inputArray);
  expect(result).toEqual({ a: 2, b: 1, c: 3 });
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("tally throws an error for invalid input like a string", () => {
  const invalidInput = "not_an_array";
  expect(() => tally(invalidInput)).toThrow(
    "Invalid input: Input must be an array"
  );
});
