const dedupe = require("./dedupe.js");
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
//test.todo("given an empty array, it returns an empty array");

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values

describe('testing for function dedupe()',()=>{
    test('it should return an empty array for an empty array is passed to the function',()=>{
        const input=[];
        const currentInput=dedupe(input);
        const targetOutPut=[];
        expect(currentInput).toStrictEqual(targetOutPut);
    });
    test('it should return a unique array and remove duplicates',()=>{
        const input=[1,2,3,1,2,3,3,4,'a','a','b','b','c'];
        const currentInput=dedupe(input);
        const targetOutPut=[1,2,3,4,'a','b','c'];
        expect(currentInput).toStrictEqual(targetOutPut);
    });

    test('it should return a copy of the array of the original array',()=>{
        const input=[1,2,3,4];
        const currentInput=dedupe(input);
        const targetOutPut=[1,2,3,4];
        expect(currentInput).toStrictEqual(targetOutPut);
        expect(currentInput).not.toBe(targetOutPut);
    })
})
