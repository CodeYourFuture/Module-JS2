// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  const tillArray = Object.entries(till);
  const tillArrayWithoutPSymbol = tillArray.map(([coin, quantity]) => [parseInt(coin), quantity]);

  for (const [coin, quantity] of tillArrayWithoutPSymbol) {
    console.log(coin * quantity);
    total += coin * quantity;
  }

  const totalInPounds = (total / 100).toFixed(2);

  return `£${totalInPounds}`;
}

// a) What is the target output when totalTill is called with the till object
// £4.40

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Because we cannot iterate through an object, just an array.

// c) What does coin * quantity evaluate to inside the for...of loop?
// Multiply each coin value by its amount, and add to the total due the += operator.

// d) Write a test for this function to check it works and then fix the implementation of 

module.exports = totalTill;
