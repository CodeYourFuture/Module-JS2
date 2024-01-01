// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// const author = {
//   firstName: "Zadie",
//   lastName: "Smith",
//   occupation: "writer",
//   age: 40,
//   alive: true,
// };

// for (const value of author) {
//   console.log(value);
// }

//The code is attempting to use a for...of loop to iterate over the values of the author object. 
//However, the for...of loop is designed to work with iterable objects,
//like arrays, not with plain objects. 
//Therefore, attempting to use it directly on the author object will result in an error.

//Correct code
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
}
for (const value of Object.value(author)) {
  console.log(value);
}
