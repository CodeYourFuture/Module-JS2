// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address[0]}`); // this will not give the correct answer because there is a 0 on the array and instead it should be .housenumber 
console.log(`My house number is ${address.houseNumber}`);
