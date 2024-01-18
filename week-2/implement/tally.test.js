const tally = require("./tally")
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

test("This counts the number of elements in each array", () => {
  expect(tally(["a"])).toEqual({ "a": 1 });
  expect(tally(["a", "b"])).toEqual({ "a": 1, "b": 1 });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object

test("This test returns an empty object for empty array", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("This checks all occurrences of duplicate items", () => {
    expect(tally(["a", "a", "a"])).toEqual({"a": 3})
    expect(tally(["a", "a", "a", "b", "b"])).toEqual({ "a": 3, "b": 2 });
    expect(tally(["a", "a", "c", "b", "b", "c"])).toEqual({ "a": 2, "b": 2,"c": 2 });
});


// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("This checks the error for invalid input", () => {
    expect(tally("hello")).toEqual("Invalid input, only use arrays")
});