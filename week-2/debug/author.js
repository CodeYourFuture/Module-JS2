// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for (const value of author) {
//   console.log(value);
// }

for (const value in author) {
  console.log(value);
}

for (const property in author) {
  const value = author[property];
  console.log(value);
}

// Before fixing the bug, it would throw a TypeError.
// This is because the for...of loop is attempting to iterate over an object (author) directly,
// but objects are not iterable in the same way as arrays. We should use for...in instead.
