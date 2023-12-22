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
const countString = require("./tally.js");

test('test if the object counts',function()
{
const arr = ["a","b","c","a","d","e","b","c","c","c"];
const currentOutput= {"a": 2, "b":2, "c": 4, "d":1, "e":1 };
const targetOutput= countString(arr);
expect(currentOutput).toEqual(targetOutput);
})
test('test if the object counts',function()
{
const arr = [];
const currentOutput= {};
const targetOutput= countString(arr);
expect(currentOutput).toEqual(targetOutput);
})
// test('test if the object counts',function()
// {
// const pers = [a,c,a,d,e];
// const currentOutput= console.error();;
// const targetOutput= countString(pers);
// expect(currentOutput).toBe(targetOutput);
// })