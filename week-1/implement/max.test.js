/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

const findMax = require("./max");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

describe('this a colection of tests to find maximum of an array',()=>{
    test('Given an array with one number When passed to the max function Then it should return that number',()=>{
        const input=[4];
        const currentOutput=findMax(input);
        const targetOutput=4;
        expect(currentOutput).toBe(targetOutput);

    })

    test('Given an array with both positive and negative and decimal numbers When passed to the max function Then it should return the largest number overall',()=>{
        const input=[-1,-2,-5,7,11,10,11.5,-9.6,20.22,-1.76];
        const currentOutput=findMax(input);
        const targetOutput=20.22;
        expect(currentOutput).toBe(targetOutput);
    })

    test('Given an array with non-number values When passed to the max function Then it should return the max and ignore non-numeric values',()=>{

        const input=[1,'3',11,'a','wm5',true];
        const currentOutput=findMax(input);
        const targetOutput=11;
        expect(currentOutput).toBe(11);
    })

    test('it returns -Infinity if the array is empty or invalid',()=>{
        const input=['a','x',true,false,'xyz'];
        const currentOutput=findMax(input);
        const targetOutput=-Infinity;
        expect(currentOutput).toBe(targetOutput);
    })
})