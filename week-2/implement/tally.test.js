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

const tally=require('./tally.js');

test('test for a unique array',()=>{
    expect(tally(['a','b','c',8])).toEqual({'a':1,'b':1,'c':1,'8':1});
})

test('test for an array containing duplicate items',()=>{
    expect(tally(['a','a','b','c','c','c',8,8,9])).toEqual({a:2,b:1,c:3,8:2,9:1});
})

test('test for invalid inputs such a string or anther object datatypes',()=>{
    expect(tally('123')).toBeInstanceOf(Error);
    expect(tally({a:1,x:2})).toBeInstanceOf(Error);
    
})