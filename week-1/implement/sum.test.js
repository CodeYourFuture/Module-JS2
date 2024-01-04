/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

const sum = require("./sum")

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("This test checks if empty array returns 0", function () {
    expect(sum([])).toBe(0);
 });

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("This test checks if the only element of array displays the same number as result", function () { 
    expect(sum([2])).toBe(2);
    expect(sum([-29])).toBe(-29);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("This test checks the numbers in the array are being added correctly", function () {
    expect(sum([2, 4, 7, 3, 9])).toBe(25);
    expect(sum([5, -9, 10, 20, -11])).toBe(15);
    expect(sum([-2,-4,-6,-8])).toBe(-20)
});


// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("This test will check that all the numbers even with decimals are being added", function () {
    expect(sum([2.3, 4.7, 9.9, 8.1, 6.7])).toBe(31.7);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("This test will check that non numbers are being ignored in the array and rest are added", function () {
    expect(sum([2, "nun", "bun", 5, 7, 1])).toBe(15);
});
