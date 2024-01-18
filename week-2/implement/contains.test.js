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
test("Checks if the object contains a certain property or not", () => {
  expect(contains({ a: 4, b: 5 }, "b")).toBe(true);
  expect(contains({ a: 2, b: 8 }, "d")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("For empty object it will always return false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("For the object containing the properties it should be true", () => {
  expect(contains({ alpha: 2, beta: 5 }, "alpha")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("For the object not containing the properties it should be false", () => {
  expect(contains({ alpha: 2, beta: 5 }, "charlie")).toBe(false);
});

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
test("For objects it will return false", () => {
    expect(contains([0, 2, "b", "h"], 'h')).toBe(false);
});
