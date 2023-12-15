// Predict and explain first...
//Ans: You used for- of loop to iterate each properties of object and log out(value) which cause as error because it can iterate value.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// Ans: by default objects are not iterable in java
// therefore, we need to iterate over the property values
// "Object.values(author))" - author is an object bring out the values

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
 
}

 //Object.values(author).forEach((value) => console.log(value));
