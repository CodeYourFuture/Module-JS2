const dedupe = require("./dedupe.js");
/*
Dedupe Array

// 📖 Dedupe means **deduplicate**

// In this kata, you will need to deduplicate the elements of an array

// E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
// E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
// test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values


// test 1
test("Given an empty array, it returns an empty array", function () {
    const emptyArray = [];
    const targetOutput = [];
  expect(dedupe(emptyArray)).toEqual(targetOutput);
});

// test 2
test("Given an array with no duplicates, it returns a copy of the original array", function () {
  const strArr = ["a", "b", "c"];
  const targetOutput1 = ["a", "b", "c"];

  const arrNum = [5,1, 2, 3, 8]; 
  const targetOutput2 = [5,1,2,3,8];

  expect(dedupe(strArr)).toEqual(targetOutput1);
  expect(dedupe(arrNum)).toEqual(targetOutput2);
});

// test 2
test("Given an array with strings or numbers, it removes the duplicate values", function () {
  const strArr = ["a", "a", "a", "b", "b", "c"];
  const targetOutput1 = ["a", "b", "c"];

  const arrNum = [5, 1, 1, 2, 3, 2, 5, 8];
  const targetOutput2 = [5, 1, 2, 3, 8];

  const mixedArr = ["a", "d", 2, 3, 2, "d", 1, 1, "e"];
  const targetOutput3 = ["a","d",2,3,1,"e"];

  expect(dedupe(strArr)).toEqual(targetOutput1);
  expect(dedupe(arrNum)).toEqual(targetOutput2);
  expect(dedupe(mixedArr)).toEqual(targetOutput3);
});