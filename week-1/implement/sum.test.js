/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

const sumOfArray=require('./sum.js');

describe('test for total of array values',()=>{
    test('it return the value if the array has one item',()=>{
        const input=[9.6];
        const currentOutput=sumOfArray(input);
        const targetOutput=9.6;
        expect(currentOutput).toBe(targetOutput);
    })

    test('it return total of the values even there are negative and decimal values in it',()=>{
        const input=[-1,-2,3,3,1.25,.25,-4.75];
        const currentOutput=sumOfArray(input);
        const targetOutput=-.25;
        expect(currentOutput).toBe(targetOutput);
    })

    test('it return total of the values and ignore non-numerical values',()=>{
        const input=['z',-1,2,-.5,true,'a'];
        const currentOutput=sumOfArray(input);
        const targetOutput=.5;
        expect(currentOutput).toBe(targetOutput);
    })

    test('it returns 0 for an empty array',()=>{
        const input=[];
        const currentOutput=sumOfArray(input);
        const targetOutput=0;
        expect(currentOutput).toBe(targetOutput);
    })
})