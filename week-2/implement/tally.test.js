const tally = require("./tally.js");

describe("tally", () => {
  test("function called tally should return an object containing the count for each unique item", () => {
  
expect(tally(['a'])).toStrictEqual({a: 1});
expect(tally(['a','a','a'])).toStrictEqual({a: 3});

  });

  test("function called tally should return an empty object when passed an empty object", () => {
  
    expect(tally([])).toStrictEqual({});
    
      });
    

});




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
