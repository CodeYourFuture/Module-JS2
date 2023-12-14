/**
 * tally array
 *
 * In this task, you'll need to implement a function called tally
 * that will take a list of items and count the frequency of each item
 * in an array
 *
 * For example:
 *
 * tally(['a']), target output: { a: 1 }
 * tally(['a','a','a']), target output: { a: 3 }
 * tally(['a','a','b','c']), target output: { a : 2, b: 1, c: 1 }
 */

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item

// Given an empty array
// When passed to tally
// Then it should return an empty object

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

const tally = require('./tally');

// Test case 1: Tallying a single item
test('Tally a single item', () => {
  const result = tally(['a']);
  expect(result).toEqual({ a: 1 });
});

// Test case 2: Tallying multiple occurrences of the same item
test('Tally multiple occurrences of the same item', () => {
  const result = tally(['a', 'a', 'a']);
  expect(result).toEqual({ a: 3 });
});

// Test case 3: Tallying multiple different items
test('Tally multiple different items', () => {
  const result = tally(['a', 'a', 'b', 'c']);
  expect(result).toEqual({ a: 2, b: 1, c: 1 });
});

// Test case 4: Tallying an empty array
test('Tally an empty array', () => {
  const result = tally([]);
  expect(result).toEqual({});
});

// Test case 5: Invalid input (not an array)
test('Invalid input (not an array)', () => {
  expect(() => tally('abc')).toThrow('Invalid input. Please provide an array.');
});
