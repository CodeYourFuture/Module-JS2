const totalTill = require("./till.js");

test("given an object with value, it should return total", () => {
  const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
  expect(totalTill(till)).toEqual("£4.4");
});

test("given an object with no value, it should return empty", () => {
  const till = {};
  expect(totalTill(till)).toEqual("£0");
});