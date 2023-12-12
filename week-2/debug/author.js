// Predict and explain first...
// Is not possible to iterate an object as an array.
// We have to change the way that we call each property.
// First, we have to change the 'for of' to 'for in'.
// Second, if we want the properties values, we have to call the property with object[key] notation.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  // console.log(value);
  console.log(author[value]);
}