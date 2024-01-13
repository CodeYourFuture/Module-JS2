const calculateFrequency = require("./solution");

describe("testing the calculateFrequency function", () => {
  test("testing with an empty array", () => {
    const input = [];
    const expectedOutput = calculateFrequency(input);
    const targetOutput = 0;
    expect(expectedOutput).toEqual(targetOutput);
  });
  test("testing with an array with positive numbers", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = calculateFrequency(input);
    const targetOutput = 10;
    expect(expectedOutput).toEqual(targetOutput);
  });
  test("testing with an array with negative numbers", () => {
    const input = [-1, -2, -3, -4];
    const expectedOutput = calculateFrequency(input);
    const targetOutput = -10;
    expect(expectedOutput).toEqual(targetOutput);
  });
  test("testing with an array with positive and negative numbers", () => {
    const input = [-1, 2, 3, -4];
    const expectedOutput = calculateFrequency(input);
    const targetOutput = 0;
    expect(expectedOutput).toEqual(targetOutput);
  });
  test("testing with an array with characters", () => {
    const input = ["a", "b", "c", "d"];
    const expectedOutput = calculateFrequency(input);
    const targetOutput = 0;
    expect(expectedOutput).toEqual(targetOutput);
  });
});
