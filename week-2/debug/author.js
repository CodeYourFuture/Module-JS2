// a: Predict and explain first...
//Ans: It caused an error because the object variable was not assigned a property value.
// b: This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// Ans: It caused an error because the object variable was not assigned a property value by default objects are not iterable in javaScript.
// therefore, we need to iterate over the property values
// "Object.values(author))" - author is an object bring out the values

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(`${author[value]}`);
 
}

 //Object.values(author).forEach((value) => console.log(value));
