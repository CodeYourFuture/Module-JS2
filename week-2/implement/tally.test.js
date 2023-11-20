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

// Given an empty array
// When passed to tally
// Then it should return an empty object

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("given a function called tally, should return an object containing the count for each unique item", () => {
  const myCount = ["a", "a", "a"];
  expect(tally(myCount)).toEqual({a: 3});
});

test("given an empty array, should return an empty object", () => {
  const myCount = [];
  expect(tally(myCount)).toEqual({});
});

test("given an array with duplicate item, should return count for each unique item", () => {
  const myCount = ["a", "a", "a", 2, "p", "I", "I", 2];
  expect(tally(myCount)).toEqual({ 2: 2, a: 3, p: 1, I: 2 });
});

test("given an invalid input like a string, should throw an error", () => {
  const myCount = "a";
  expect(tally(myCount)).toEqual("It is an error!");
});