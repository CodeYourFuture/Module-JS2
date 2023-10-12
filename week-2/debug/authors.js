// Loop through the Array, and for each object, use `console.log()` to print out the below sentence
// and insert the corresponding values to the place holders that are indicated in curly braces:
// "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 63,
    alive: true,
  },
  {
    firstName: "Yukiko",
    lastName: "Motoya",
    occupation: "writer",
    age: 49,
    alive: true,
  },
];

for (const author of writers) {
  console.log(
    `Hi, my name is ${author.firstName} ${author.lastName}. I am ${author.age} years old, and work as a ${author.occupation}.`
  );
}
