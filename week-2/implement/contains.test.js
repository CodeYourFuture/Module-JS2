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

test("if the object contains the property turn true", () => {
  expect(contains({ a : 1, b: 2 },'a')).toBe(true);
});



test("if the object doesn't contains the property turn false", () => {
  expect(contains({ a: 1, b: 2 }, 'c')).toBe(false);
});


// Given an empty object
// When passed to contains
// Then it should return false

test("if the object is empty, turn false", () => {
  expect(contains({ }, 'c')).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("When passed to contains with an existing property name should turn true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});



// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("When passed to contains with a non-existent property name, turn false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});


// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error

test("When passed to contains invalid parameters like arrays, turn false", () => {
  expect(contains([], "c")).toBe(false);
  expect(contains(2, "c")).toBe(false);
  expect(contains(NaN, "c")).toBe(false);
  expect(contains(true, "c")).toBe(false);
  expect(contains(false, "c")).toBe(false);
  expect(contains(undefined, "c")).toBe(false);
});
