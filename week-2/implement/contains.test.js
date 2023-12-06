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
test("test contains function to return true if the object contains the property", () => {
  const obj = { a: 1, b: 2 };
  const propertyName = "a";
  const result = contains(obj, propertyName);
  expect(result).toBe(true);
});
test("test contains function to return false if the object does not contain property", () => {
  const obj = { a: 1, b: 2 };
  const propertyName = "c";
  const result = contains(obj, propertyName);
  expect(result).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("test contains function to return false if the input is an empty object", () => {
  const obj = {};
  const propertyName = "a";
  const result = contains(obj, propertyName);
  expect(result).toBe(false);
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("test contains function to return true if the object contains the property", () => {
  const obj = { a: 1, b: 2 };
  const propertyName = "b";
  const result = contains(obj, propertyName);
  expect(result).toBe(true);
});


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("test contains function to return false if the object does not contain the non-existent property", () => {
  const obj = { a: 1, b: 2 };
  const propertyName = "c";
  const result = contains(obj, propertyName);
  expect(result).toBe(false);
});

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
test("test contains function to return false if the input is an array", () => {
  const objArray = [1, 2, 3];
  const propertyName = "0";
  const result = contains(objArray, propertyName);
  expect(result).toBe(false);
});

