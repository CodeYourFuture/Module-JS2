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


console.log(`My house number is ${address['houseNumber']}`);
console.log(`My house number is ${address.houseNumber}`);

// we'll face an error as the `address` is not an array to refer items by using the index address[0] it's a key/value pair object 
// however we still could use address[0] for this typ of objects but we don't have a key with the name 0 in bracket we should 
// put the key's name in the it.
// it wasn't an error it was undefined lol