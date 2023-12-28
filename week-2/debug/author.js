// Predict and explain first...

//author is an object, and the for...of loop is trying to iterate over it

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// To access the values within an object, we can use various methods like Object.values(), Object.keys(), or Object.entries().

for (const value of Object.values(author)) {
  console.log(value);
}

// or
for (const key of Object.keys(author)) {
  console.log(author[key]);
}

// or
for (const [key, value] of Object.entries(author)) {
  console.log(value);
}
