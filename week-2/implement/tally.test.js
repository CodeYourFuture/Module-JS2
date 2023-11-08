const tally = require("./tally");

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

test("returns an object containing the count of each unique item", () => {
  const currentOutput = tally(["a"]);
  const targetOutput = { a: 1 };

  expect(currentOutput).toEqual(targetOutput);
});

// Given an empty array
// When passed to tally
// Then it should return an empty object

test("if tally is empty returns an empty object", () => {
  const currentOutput = tally([]);
  const targetOutput = {};

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("returns an object containing the count of each unique item", () => {
  const currentOutput = tally(["a", "a", "a", "b", "square", "square"]);
  const targetOutput = { a: 3, b: 1, square: 2 };

  expect(currentOutput).toEqual(targetOutput);
});

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("returns an object containing the count of each unique item", () => {
  const currentOutput = tally("Hello");
  const targetOutput = "Error, you should pass an array of values";

  expect(currentOutput).toBe(targetOutput);
});
