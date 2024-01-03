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
test("Object contains property", () => {
  const testObject = { name: "Jim", age: 35 };
  expect(contains(testObject, "name")).toBe(true);
});

test("Object does not contain property", () => {
  const testObject = { name: "Jim", age: 35 };
  expect(contains(testObject, "gender")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("Empty object should return false", () => {
  const emptyObject = {};
  expect(contains(emptyObject, "property")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Object with existing property should return true", () => {
  const objectWithProperties = { name: "Jim", age: 35 };
  expect(contains(objectWithProperties, "name")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Object with non-existent property should return false", () => {
  const objectWithProperties = { name: "Jim", age: 35 };
  expect(contains(objectWithProperties, "gender")).toBe(false);
});

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
test("Invalid parameters should return false or throw an error", () => {
  const arrayParameter = [1, 2, 3];
  expect(() => contains(arrayParameter, "property")).toThrowError(
    "Invalid parameter: array"
  );
});
