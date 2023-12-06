// Predict and explain first...

// This program attempts to log out all the property values in the object.
//cant't log all of object values this way we could store the object values in an array and log out the array.
//or as I tried it now we can do [author] in the for loop
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of [author]) {
  console.log(value);
}
/*
first attempt to get all the object values which is working just fine 
let element = [author];
for (const value of element) {
  console.log(value);
}

*/
