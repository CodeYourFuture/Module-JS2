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

console.log(`My house number is ${address.houseNumber}`);
//or
console.log(`My house number is ${address[`houseNumber`]}`);

console.log(`My house number is ${address[0]}`); // will be  undefined

//or we can put them in an array directly so we can call index 0 Here addressArray extracts individual properties from an existing object (address) and creates an array from those extracted values.
const addressArray = [
  address.houseNumber,
  address.street,
  address.city,
  address.country,
  address.postcode,
];

console.log(`My house number is ${addressArray[0]}`);

//...............................................................

//or here  newAddress directly defines an array with an object inside it, so accessing properties involves accessing the object within the array by index and then accessing the specific property within that object.

const newAddress = [
  {
    //object inside
    houseNumber: 42, // properties
    street: "Imaginary Road",
    city: "Manchester",
    country: "England",
    postcode: "XYZ 123",
  },
];

console.log(`My house number is  ${addressArray[0]}`);
