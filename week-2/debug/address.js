// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// const address = {
//   houseNumber: 42,
//   street: "Imaginary Road",
//   city: "Manchester",
//   country: "England",
//   postcode: "XYZ 123",
// };

// console.log(`My house number is ${address[0]}`);

//In the provided code, the attempt to log out the houseNumber from the address object is incorrect.
//The syntax used (address[0]) is trying to access a property named 0 on the address object,
// but the houseNumber property is not accessed correctly.

// Corrected code
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address[houseNumber]}`);


//To access a property of an object, you should use dot notation (object.propertyName). 
//In this case, the houseNumber property is accessed using address.houseNumber.

//The corrected code uses the correct syntax to access the houseNumber property of
//- the address object and log it to the console.