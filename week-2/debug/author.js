// Predict and explain first...

// Because an object is not iterable with a for of loop. Therefore its a good practice to use
// the Object.value to return the values and Object.keys to return the keys

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(Object.values(author));
