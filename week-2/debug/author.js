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

// for (const value of author) { // this will not give correct answer because this is not how to access the values inside an object 
//   console.log(value);
// }

// correct way would be to use object.values(author)

for (const value of Object.values(author)) { 
  console.log(value);
}