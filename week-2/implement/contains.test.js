const contains = require("./contains");

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

test("When passed an object and a property name, it should return true if the object contains the property, false otherwise" , () => {
    const object = {a: 3, c: 7};
    const objectTwo = {obj: object, propName: 'c'}
    expect(contains(objectTwo)).toEqual(true);
});

// Given an empty object
// When passed to contains
// Then it should return false

test("When passed a an empty object, it should return false" , () => {
    const emptyObject = {};
    const testEmptyObject = {obj: emptyObject , propName: 'someProp'}
    expect(contains(testEmptyObject )).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("When passed to contains with an existing property name then it should return true" , () => {
    const propObject = {name: 'sonia', age: 10};
    const testPropObject = {obj: propObject , propName: 'name'}
    expect(contains(testPropObject)).toEqual(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("When passed to contains with a non-existing property name then it should return false" , () => {
    const propObjectTwo = {name: 'sonia', age: 10};
    const nonExisting  = {obj: propObjectTwo , propName: 'address'}
    expect(contains(nonExisting)).toEqual(false);
});
// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error

test("When passed to contains like arrays then it should return false or throw an error" , () => {
    const array= ['string', 34, 89];
    const arrayNameObj  = {obj: array , propName: ''}
    expect(contains(arrayNameObj)).toEqual(false);
});