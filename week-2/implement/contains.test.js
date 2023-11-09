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

test("returns true if the object contains the property given", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe (true);
  expect(contains({ a: 1, b: 2, c: 5 }, "c")).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false

test("returns false when given an empty object", () => {
  expect(contains({ a: 1, b: 2 }, "")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("returns true if the object is given an existing property name ", () => {
  expect(contains({ age: 12, lenght: 20 }, "age")).toBe(true);
  expect(contains({ yellow: 1, blue: 2, green: 5 }, "blue")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("returns false if the object is given non-existing property name ", () => {
  expect(contains({ age: 12, lenght: 20 }, "name")).toBe(false);
  expect(contains({ yellow: 1, blue: 2, green: 5 }, "red")).toBe(false);
});

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error

test("returns false if the object is given invalid parameteres like arrays ", () => {
  expect(contains({ age: 12, lenght: 20 }, ["aisha", "fatma"])).toBe(false);
  expect(contains({ yellow: 1, blue: 2, green: 5 }, ["pink", "blue"])).toBe(false);
});
