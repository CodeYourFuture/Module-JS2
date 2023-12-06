const totalTill = require("./till.js");

describe("totalTill function", () => {
  it("calculates the total value of coins in pounds(example 1)", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };

    const result = totalTill(till);
    expect(result).toBe("£4.40");
  });
});

describe("totalTill function", () => {
  it("calculates the total value of coins in pounds(example 2)", () => {
    const till = {
      "1p": 11,
      "5p": 2,
      "50p": 1,
      "20p": 43,
    };

    const result = totalTill(till);
    expect(result).toBe("£9.31");
  });
});
