// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// The code will return undefined because accessing key:value pair object is not done using index.
// Rather, accessing it can be done like object property, using .houseNumber the way we use .length property 

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// console.log(`My house number is ${address[0]}`);

console.log(`My house number is 
${address.houseNumber} ${address.street}, ${address.city}`);
console.log(`Postcode ${address.postcode}`);
