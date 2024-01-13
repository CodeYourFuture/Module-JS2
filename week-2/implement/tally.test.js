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

describe("testing for tally", () => {
  // Given a function called tally
  // When passed an array of items
  // Then it should return an object containing the count for each unique item
  test("when an array with items, returns an object with counts for each item", () => {
    expect(tally(["a", "b", "c"])).toEqual({ a: 1, b: 1, c: 1 });
    expect(tally(["a"])).toEqual({ a: 1 });
  });

  // Given an empty array
  // When passed to tally
  // Then it should return an empty object
  test("when an empty array, returns an empty object", () => {
    expect(tally([])).toEqual({});
  });

  // Given an array with duplicate items
  // When passed to tally
  // Then it should return counts for each unique item
  test("when an array with duplicated items, returns an object with counts for each item", () => {
    expect(tally(["a", "b", "b"])).toEqual({ a: 1, b: 2 });
    expect(tally(["a", "a", "a"])).toEqual({ a: 3 });
  });

  // Given an invalid input like a string
  // When passed to tally
  // Then it should throw an error
  test("when an array with items, returns an object with counts for each item", () => {
    expect(() => tally("aaa")).toThrowError(TypeError);
    expect(() => tally(123)).toThrowError("Given value is not an Array");
  });
});
