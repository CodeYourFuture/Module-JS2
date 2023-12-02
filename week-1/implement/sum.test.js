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

const findTheSum = require('./sum');

test("returns 0 if array is empty", () => {
    expect(findTheSum([])).toBe(0);
});


test("Given an array with just one number, return that number", () => {
    expect(findTheSum([13])).toBe(13);
});

test("Return the correct total sum for an array containing negative numbers", () => {
    expect(findTheSum([4, -12, -6, 28, 13])).toBe(17);
});

test("Return the correct total sum for an array containing decimal/float numbers", () => {
    expect(findTheSum([0.8, 3.2, 0.89, 9.65, 1.54])).toBe(16.08);
});

test("Ignore non-number and return the sum of the numerical elements", () => {
    expect(findTheSum([76, 36, "#", 9, "Alex"])).toBe(121);
});

test("Return sum of the numbers of the array", () => {
    expect(findTheSum([6, 34, 90, 12, 65])).toBe(207);
});