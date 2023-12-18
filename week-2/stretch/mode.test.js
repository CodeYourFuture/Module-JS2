const calculateMode = require("./mode");

// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array

// Example:
// Given [2,4,1,2,3,2,1]
// When calculateMode is called on [2,4,1,2,3,2,1]
// Then it should return 2 */

describe("calculateMode()", () => {
  test("returns the most frequent number in an array ", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];
    //const resultMode = calculateMode(nums)
    //const resultFreq = highestFrequency(resultMode)
    expect(calculateMode(nums)).toBe(2);
    //expect(highestFrequency(nums)).toBe(2);
  });

  test("returns the first mode in case of multiple modes", () => {
    const numsTwo = [1, 2, 2, 3, 3];
   // const resultMode2 = calculateMode(numsTwo)
   //const resultFreq2 = highestFrequency(resultMode2)
    expect(calculateMode(numsTwo)).toBe(2);
  });

  test("ignores non-number values", () => {
    const nums = [1, 3, "2", 2, 3, null];

    expect(calculateMode(nums)).toBe(3);
  });
});
