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
test('test if the object contains the given property',function()
{
const person01 = {name:'sab',
age:'18',
eyeColor:'black',};
const currentOutput= true;
const targetOutput= contains(person01,'age');
expect(currentOutput).toBe(targetOutput);
})
test('test if the object contains the given property',function()
{
const person01 = {};
const currentOutput= false;
const targetOutput= contains(person01,'age');
expect(currentOutput).toBe(targetOutput);
})
test('test if the object contains the given property',function()
{
const person01 = {name:'sab',
age:'18',
eyeColor:'black',};
const currentOutput= false;
const targetOutput= contains(person01,'surname');
expect(currentOutput).toBe(targetOutput);
})
test('test if the object contains the given property',function()
{
const person01 = [1,2,3];
const currentOutput= false;
const targetOutput= contains(person01,'age');
expect(currentOutput).toBe(targetOutput);
})