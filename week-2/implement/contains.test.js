const contains = require("./contains.js");
describe('contain function' , ()=>{
  test('should return true when the object contains the key',()=>{
    expect(contains({ a: 1, b: 2 }, 'a')).toBe(true);
  });
    test('should return false for an empty object', () => {
    expect(contains({}, 'a')).toBe(false);
  });

  test('should return false for an array input', () => {
    expect(contains([], 'length')).toBe(false);
  });

  test('should return false for null input', () => {
    expect(contains(null, 'a')).toBe(false);
  });

  test('should return false for non-object input like a number', () => {
    expect(contains(42, 'a')).toBe(false);
  });

  test('should return false when the key is not a string', () => {
    expect(contains({ a: 1 }, 1)).toBe(false);
  });

  test('should return false as an array input', () => {
    expect(contains([1, 2], '1')).toBe(false);
  });
});
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
