// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const co =Number(coin.replace(/[^\d]/g, ''));
    console.log(co * quantity);
    total += co * quantity;
  }

  return `£${total / 100}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount);
// a) What is the target output when totalTill is called with the till object
//  10,
// "30,
// "200,
// "200
// 4.4
// b) Why do we need to use Object.entries inside the for...of loop in this function?
// to convert the object in to an array pairs so we can calculate their multiply.
// c) What does coin * quantity evaluate to inside the for...of loop?
// it multiplies each pairs inside the loop 
// d) Write a test for this function to check it works and then fix the implementation of totalTill
test('calculate total amount in pound', () =>{
const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const currentOutput= (10,30,200,200,'£4.4');
const targetOutput =totalTill(till);
expect(currentOutput).toBe(targetOutput)

}

)