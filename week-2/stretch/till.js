// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;
  for (const [coin, quantity] of Object.entries(till)) {
    const coinInNumeric = parseFloat(coin)
    //console.log(coinInNumeric * quantity);
    total += coinInNumeric * quantity;
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

module.exports = totalTill;


// a) What is the target output when totalTill is called with the till object
//Ans: the target out when called the till object is 10
//30
//200
//200
//£4.4 total
// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Ans: because we need string-keyed property key-value pairs. that is why.
// c) What does coin * quantity evaluate to inside the for...of loop?
// Ans: To calculate the total value of a specific coin, you need to multiply the numerical value of
// the coin with the quantity you have. For instance, if you have 10 coins worth 1p each, the total value would be 10p. In order to convert a string into a numerical value, I used the parseFloat() function.
// d) Write a test for this function to check it works and then fix the implementation of totalTill
// Ans : module.exports = totalTill;