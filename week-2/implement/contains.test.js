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

const obj = {a:1, b:2};

describe("contains", () => {
    test("returns false if empty object", () => {
      expect(contains({})).toBe(false);
    });
  
    test("returns true if object contains property otherwise false", () => {
      expect(contains(obj, 'a')).toBe(true);
      expect(contains(obj, 'd')).toBe(false);
    });

    test("returns true if contains existing property name", () => {
        expect(contains(obj, 'a')).toBe(true);
      });

    test("returns false if contains non-existing property name", () => {
        expect(contains(obj, 'd')).toBe(false);
      });

    test("returns false if contaisn invalid parameters", () => {
        expect(contains([], 'a')).toBe(false);
        expect(contains(1, 'a')).toBe(false);
      });
})