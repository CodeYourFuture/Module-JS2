// const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({ a : 1, b: 2 },'a') // returns true
as the object contains a key of 'a'

E.g. contains({a : 1, b : 2},'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
//.............................................................................................

// Test case 1: Object contains the property
test('Object contains the property', () => {
  const obj = { a: 1, b: 2 };
  const result = contains(obj, 'a');
  expect(result).toBe(true);
});

// Test case 2: Object does not contain the property
test('Object does not contain the property', () => {
  const obj = { a: 1, b: 2 };
  const result = contains(obj, 'c');
  expect(result).toBe(false);
});

// Test case 3: Empty object
test('Empty object', () => {
  const obj = {};
  const result = contains(obj, 'a');
  expect(result).toBe(false);
});

// Test case 4: Object with existing property
test('Object with existing property', () => {
  const obj = { a: 1, b: 2 };
  const result = contains(obj, 'b');
  expect(result).toBe(true);
});

// Test case 5: Object with non-existent property
test('Object with non-existent property', () => {
  const obj = { a: 1, b: 2 };
  const result = contains(obj, 'c');
  expect(result).toBe(false);
});

// Test case 6: Invalid parameters (passing an array)
test('Invalid parameters (passing an array)', () => {
  const arr = [1, 2, 3];
  const result = contains(arr, 'a');
  expect(result).toBe(false);
});


const contains = require("./contains.js");