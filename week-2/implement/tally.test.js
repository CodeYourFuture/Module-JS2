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
const tally = require('./tally.js');
describe('tally function', () => {
  test('should return an object containing the count for each unique item', () => {
    const result = tally(['a', 'b', 'a', 'c', 'b', 'a']);
    expect(result).toEqual({ a: 3, b: 2, c: 1 });
  });

  test('should return an empty object when passed an empty array', () => {
    const result = tally([]);
    expect(result).toEqual({});
  });

  test('should handle arrays with duplicate items correctly', () => {
    const result = tally(['x', 'y', 'x', 'x', 'z']);
    expect(result).toEqual({ x: 3, y: 1, z: 1 });
  });

  test('should throw an error when passed a non-array input', () => {
    expect(() => tally('not an array')).toThrow('Input must be an array');
    expect(() => tally(42)).toThrow('Input must be an array');
    expect(() => tally({})).toThrow('Input must be an array');
    expect(() => tally(null)).toThrow('Input must be an array');
  });
});