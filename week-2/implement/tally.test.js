const tally = require("./tally.js");

test("returns an object with the count for a single item", () => {
  const items = ['a'];
  const expectedCount = { 'a': 1 };

  const result = tally(items);

  expect(result).toEqual(expectedCount);
});

test("returns an object with counts for duplicate items", () => {
  const items = ['a', 'a', 'a'];
  const expectedCount = { 'a': 3 };

  const result = tally(items);

  expect(result).toEqual(expectedCount);
});

test("returns an object with counts for multiple unique items", () => {
  const items = ['a', 'a', 'b', 'c'];
  const expectedCount = { 'a': 2, 'b': 1, 'c': 1 };

  const result = tally(items);

  expect(result).toEqual(expectedCount);
});

test("returns an empty object for an empty array", () => {
  const items = [];
  const expectedCount = {};

  const result = tally(items);

  expect(result).toEqual(expectedCount);
});

test("throws an error for invalid input (string)", () => {
  const items = 'invalid input';

  expect(() => {
    tally(items);
  }).toThrowError("Input must be an array");
});


  