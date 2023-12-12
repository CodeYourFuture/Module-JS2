const dedupe = require("./dedupe.js");


describe("dedupe", () => {
  test("Given an array with strings or number Then it should remove the duplicate values", () => {
    expect(dedupe(['a','a','a','b','b','c'])).toStrictEqual(['a','b','c']);
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toStrictEqual([5,1,2,3,8]);
  });

  test("Given an array with no dublicate should return the array", () => {
    expect(dedupe([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
    expect(dedupe(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
  });

});

/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values
