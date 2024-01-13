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

describe("testing contains function", () => {
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  test("testing if the property exists in an object or not", () => {
    const object = {
      propertyOne: 1,
      propertyTwo: 2,
      propertyThree: 3,
    };
    const validPropertyName = "propertyOne";
    const invalidPropertyName = "invalidPropertyName";
    expect(contains(object, validPropertyName)).toEqual(true);
    expect(contains(object, invalidPropertyName)).toEqual(false);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("testing if function works with an empty object", () => {
    const emptyObject = {};
    const propertyName = "propertyOne";
    expect(contains(emptyObject, propertyName)).toEqual(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  test("testing if function works with an existing property", () => {
    const object = {
      propertyOne: 1,
      propertyTwo: 2,
      propertyThree: 3,
    };
    const validPropertyName = "propertyOne";
    expect(contains(object, validPropertyName)).toEqual(true);
  });
  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false

  test("testing if function works with an non-existing property", () => {
    const object = {
      propertyOne: 1,
      propertyTwo: 2,
      propertyThree: 3,
    };
    const invalidPropertyName = "invalidPropertyName";
    expect(contains(object, invalidPropertyName)).toEqual(false);
  });

  // Given invalid parameters like arrays
  // When passed to contains
  // Then it should return false or throw an error
  test("testing with invalid parameters", () => {
    const array = ["1", "2", "3"];
    const invalidPropertyName = "invalidPropertyName";
    expect(contains(array, invalidPropertyName)).toEqual(false);
  });
});
