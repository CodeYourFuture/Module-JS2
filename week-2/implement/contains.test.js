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

test("given an empty object, it should return false", () => {
    const myNum = { };
    expect(contains(myNum, "")).toBe(false);
});

test("given an object with properties, it should return true", () => {
  const myNum = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  expect(contains(myNum, "b")).toBe(true);
});

test("given an object with a non-existent property name, it should return false", () => {
  const myNum = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  expect(contains(myNum, "z")).toBe(false);
});

test("given invalid parameters like arrays, it should return false or throw an error", () => {
  const myNum = ["a: 1", "b: 2", "c: 3", "d: 4", "e : 5"];
  expect(contains(myNum, "c")).toBe(false);
});