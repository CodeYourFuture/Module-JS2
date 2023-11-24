// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    //console.log(Number(coin.slice(0,coin.indexOf('p'))) * quantity);
    total += Number(coin.slice(0,coin.indexOf('p'))) * quantity;
    
  }
  
  return `£${total/100}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);
console.log(totalAmount);


module.exports=totalTill;


// a) What is the target output when totalTill is called with the till object
//target output should be £4.4 

// b) Why do we need to use Object.entries inside the for...of loop in this function?
//we use object.entries() to make each key/value pair as an array [key,value] element of another outer array =>[[key1,value1],[key2,value2]...]
// and with this method we can loop through each key/value pair .
// c) What does coin * quantity evaluate to inside the for...of loop?
// it was supposed to multiply quantity of coins to their price for example 10 coins of 1p , 10*1 , but 1p which is the key is a string type
// and it's not possible to get multiplied by the quantity of it so some changes are made to fix it . 


// d) Write a test for this function to check it works and then fix the implementation of totalTill
