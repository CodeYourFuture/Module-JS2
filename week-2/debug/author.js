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

for (const value of Object.values(author)) {
  
  console.log(value); 
}

//It is not working because the for loop is trying to iterate the object author which is not iterable. Instead we need to link it to the values inside the array.
