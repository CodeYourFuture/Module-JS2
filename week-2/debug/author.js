// Predict and explain first...
// for...of loop is designed to iterate over iterable objects like arrays, not over plain objects. we need to use for .. in or Object.values() with for of
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const element of Object.values(author)){
  console.log(element);
}

for (const element in author) {
  console.log(author[element]);
}
