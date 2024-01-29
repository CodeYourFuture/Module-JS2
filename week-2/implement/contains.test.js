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
describe("contains function", () => {
  test("Given a contains function, then it should return true if the objet contains the property, false otherwise", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
    expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
  });

  test("Given an empty object, then it should return false", () => {
    expect(contains({})).toEqual(false);
  });

  test("Given an object with properties, when passed to contains with an existing property name, then it should return true", () => {
    expect(contains({ a: 1, b: 2 }, "b")).toEqual(true);
  });

  test("Given an object with properties, when passed to contains with a non-existing property name, then it should return false", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
  });

  test("Given invalid parameters like arrays, then it should return false or throw an error", () => {
    expect(contains([1, 2, 3, 4])).toEqual(false);
  });
});
