const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({ a : 1, b: 2 },'a') // returns true
as the object contains a key of 'a'

E.g. contains({a : 1, b : 2},'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:
const obj = { a: 1, b: 2 };

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test('should return true if the objects contain the property, false otherwise', () => {
  expect(contains(obj, 'a')).toBe(true);
  expect(contains(obj, 'c')).toBe(false);
})

// Given an empty object
// When passed to contains
// Then it should return false
test('should return false if passed an empty object', () => {
  expect(contains({}, 'a')).toBe(false);
  expect(contains({}, 'c')).toBe(false);
})


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test('should return true when passed a key and an object that contains this property', () => {
  expect(contains(obj, 'a')).toBe(true);
  expect(contains(obj, 'b')).toBe(true);
})

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test('should return false when passed a key and an object that doesn\'t contain this property', () => {
  expect(contains(obj, 'c')).toBe(false);
  expect(contains(obj, 'd')).toBe(false);
})

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
test('should return false if passed an array or other invalid parameters', () => {
  expect(contains([], 'a')).toBe(false);
  expect(contains(1, 'a')).toBe(false);
  expect(contains(null, 'a')).toBe(false);
  expect(contains(undefined, 'a')).toBe(false);
  expect(contains(true, 'a')).toBe(false);
  expect(contains(false, 'a')).toBe(false);
  expect(contains(NaN, 'a')).toBe(false);
})
