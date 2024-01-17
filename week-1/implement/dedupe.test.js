
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


// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values
// test.todo("given an empty array, it returns an empty array");
const dedupe = require("./dedupe.js");

test("return duplicate arr", function() {
    const arr = ['a', 'a', 'a', 'b', 'b', 'c'];
    const currentOutput = dedupe(arr);
    const targetOutput = ['a', 'b', 'c'];
    expect(currentOutput).toEqual(targetOutput);
});

test("return empty arr", function() {
    const arr = [];
    const currentOutput = dedupe(arr);
    const targetOutput = [];
    expect(currentOutput).toEqual(targetOutput);
});

test("return arr with number", function() {
    const arr = [1, 2, 3, 4, 4, 5, 5];
    const currentOutput = dedupe(arr);
    const targetOutput = [1, 2, 3, 4, 5];
    expect(currentOutput).toEqual(targetOutput);
});