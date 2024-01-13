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

describe("contains function", () => {
  test("returns true if the object contains the property", () => {
    const containsObj = { a: 1, b: 2 };
    expect(contains(containsObj, "a")).toBe(true);
  });
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise

  test("returns false for an empty object", () => {
    const noObj = {};
    expect(contains(noObj, "someProperty")).toBe(false);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false

  test("returns true for an existing property in the object", () => {
    const existObj = { Pr: 3.14, pH: 7 };
    expect(contains(existObj, "pH")).toBe(true);
  });

  /* ???? To test multiple properties simultaneously,  using logical OR (||)  logical AND (&&).
 expect(contains(existObj, "pH") || contains(existObj, "Pr")).toBe(true);
}); */

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true

  test("returns false for a non-existent property in the object", () => {
    const nonExistObj = { x: 10, y: 20 };
    expect(contains(nonExistObj, "z")).toBe(false);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false

  test("returns false for invalid parameters like arrays", () => {
    const arr = [1, 2, 3];
    expect(contains(arr, "invalidParameters ")).toBe(false);
  });
});
// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
