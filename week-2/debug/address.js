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

console.log(`My house number is ${address[0]}`);

// This is not working because index[0] is used instead of the key[houseNumber] which holds the value of the houseNumber(42). 
//console.log(`My house number is ${address["houseNumber"]}`);This is how we should write it in the console. 

