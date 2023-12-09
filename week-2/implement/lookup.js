const contains = require("./contains");

function createLookup(inputArray) {
  // implementation here
  const objectedArray={};
  for(let item of inputArray){
    objectedArray[item[0]]=item[1];
  }
  return objectedArray;
}

/* ======= Test suite is provided below... =====
 */
// 
// test("converts a single pair of currency codes", () => {
//   expect(createLookup([["GB", "GBP"]])).toEqual({
//     GB: "GBP",
//   });
//   expect(createLookup([["DE", "EUR"]])).toEqual({
//     DE: "EUR",
//   });
// });

// test.todo("creates a country currency code lookup for multiple codes");


module.exports=createLookup;
// console.log(createLookup([['US', 'USD']]));


