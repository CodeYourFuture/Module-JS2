// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// it was write of instead of in and also and add array to value 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}
