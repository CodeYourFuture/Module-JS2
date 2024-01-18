// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123"  //extra comma here 
};

console.log(`My house number is ${address.houseNumber}`); // it is an object not the array that's why index didn't work, need to refer to the key to make it work
