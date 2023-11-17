// Predict and explain first...
//Answer: The console would not print because "of" can't iterate through in for of "in" will and the dot won't work as well except if square brackets is used.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "Writer",
  age: 40,
  alive: true,
};
for (const value in author) {
  console.log(author[value]);
}
