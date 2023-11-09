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

test("Given an array with one number it should return that number", () => {
    expect(findTheSum([19])).toBe(19);
});

test("return the sum of numbers if array has both positive and negative numbers", () => {
    expect(findTheSum([19, -3, 5, -8, -11, 78])).toBe(80);
});
test("return the sum if array has decimal/float numbers", () => {
    expect(findTheSum([0.4, 0.78, 0.1, 0.43, 0.5])).toBe(2.21);
    expect(findTheSum([3.1, 9.55, 1.5, 2.67, 5.5])).toBe(22.32);
});
test("Skip non-number and return the sum of an array", () => {
    expect(findTheSum([10, 20,"@", 5,"b" ,80])).toBe(115);
    expect(findTheSum([99, "adniya", "$", 6, 67, 87, 34])).toBe(293);
});

test("returns sum of an number array", () => {
    expect(findTheSum([1, 2, 5, 50])).toBe(58);
    expect(findTheSum([9, 5, 2, 5, 0, 8, 4])).toBe(33);
});
