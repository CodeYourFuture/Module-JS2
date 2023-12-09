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

for (const value in author) {
  console.log(author[value]);
}

//it should've printed key's in the object but showed an error that author is not iterable . probably 
// we have to use for..in.. loop for key/value objects with some extra changes `author[value]` to print thet real value not the key.
