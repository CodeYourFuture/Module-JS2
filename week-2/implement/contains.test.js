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
const exampleOne = {a : 1, b : 2 }; // "b", true expected
const exampleTwo = {a : 1, b: 2 }; // "c", false expected

// Given an empty object
// When passed to contains
// Then it should return false
const emptyExample = {}; //false expected

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
const person = {age:23, height:1.7, name: "Yahya"};


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like arrays
// When passed to contains
// Then it should return false or throw an error
const invalidParam = ["a", "b", "c"];

test("checks object property if available or not", function(){
    expect(contains(exampleOne,"a")).toBe(true);
    expect(contains(exampleOne, "c")).toBe(false);

    expect(contains(emptyExample, "a")).toBe(false);

    expect(contains(person, "age")).toBe(true);
    expect(contains(person, "a")).toBe(false);

    expect(contains(invalidParam, "a")).toBe(false);
})