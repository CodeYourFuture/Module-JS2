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

const tally = require("./tally.js");
// Acceptance criteria:
// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

describe("tally function", () => {
  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  test("returns an empty object for an empty array", () => {
    const result = tally([]);
    expect(result).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item

  test("returns counts for each unique item in the array", () => {
    const result = tally(["a", "a", "b", "c"]);
    expect(result).toEqual({ a: 2, b: 1, c: 1 });
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  test("throws an error for invalid input like a string", () => {
    expect(() => {
      tally("invalid input");
    }).toThrow();
  });
});
