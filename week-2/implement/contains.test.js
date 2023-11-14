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

test("return true as the object contains the property", () => {
    expect(contains({ a : 1, b: 2 },'a')).toBe(true);
  });
  test("return false as the object does not contains the property", () => {
    expect(contains({ a : 1, b: 2 },'c')).toBe(false);
  });

  test("return false as the object is empty", () => {
    expect(contains({},'c')).toBe(false);
  });

  test("should return false when passed an object with a non-existent property name", () => {
    const obj = {  Name : "Mark", LastName: "Golding", age: 30}
    const propertyName = 'middleName';
    expect(contains(obj, propertyName)).toBe(false);
  });

  test("should return false when passed an object with a non-existent property name", () => {
    const obj = {  Name : "Mark", LastName: "Golding", age: 30}
    const propertyName = 'middleName';
    expect(contains(obj, propertyName)).toBe(false);
  });
 
