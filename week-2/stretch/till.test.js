const totalTill = require("./till");

describe("totalTill function", () => {
  test("should correctly calculate the total value of coins", () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };

    // Expected total to be: 10 * 1p + 6 * 5p + 4 * 50p + 10 * 20p = 10 + 30 + 200 + 200 = 440p = £4.40
    const result = totalTill(till);
    expect(result).toBe("£4.40");
  });

  test("should return £0.00 when no coins are present", () => {
    const till = {};
    const result = totalTill(till);
    expect(result).toBe("£0.00");
  });

  test("should correctly calculate when only one coin type is present", () => {
    const till = {
      "2p": 5, // Expected to be:5 * 2p = 10p = £0.10
    };
    const result = totalTill(till);
    expect(result).toBe("£0.10");
  });

  test("should handle coins with higher denominations correctly", () => {
    const till = {
      "1p": 100, // Expected to  be:100 * 1p = 100p = £1.00
      "50p": 2, // Expected to be:2 * 50p = 100p = £1.00
    };
    const result = totalTill(till);
    expect(result).toBe("£2.00");
  });
});
