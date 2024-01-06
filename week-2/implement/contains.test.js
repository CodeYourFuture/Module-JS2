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



const contains = require("./contains.js");

test("returns true if the object contains the property", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2, c: 3 };

  expect(contains(obj1, 'a')).toBe(true);
  expect(contains(obj2, 'c')).toBe(true);
});

test("returns false if the object is empty", () => {
  const obj = {};

  expect(contains(obj, 'a')).toBe(false);
});

test("returns true if the object contains an existing property name", () => {
  const obj = { a: 1, b: 2, c: 3 };

  expect(contains(obj, 'b')).toBe(true);
});

test("returns false if the object doesn't contain a non-existent property name", () => {
  const obj = { a: 1, b: 2 };

  expect(contains(obj, 'c')).toBe(false);
});

test("returns false for invalid parameters like arrays", () => {
  const arr = [1, 2, 3];
  const str = "Hello, world!";

  expect(contains(arr, 'a')).toBe(false);
  expect(contains(str, 'b')).toBe(false);
});
