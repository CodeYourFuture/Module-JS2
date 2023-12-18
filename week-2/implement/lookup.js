const { logDOM } = require("@testing-library/dom");

//logDOM(document.body); // 'document' object is not available in the Node.js environment.


function createLookup(codePairs) {
  // implementation here
  const objResult  = {};
  for(const [countCode, currencyCode] of codePairs){
    objResult [countCode] = currencyCode;
  }
  return objResult;
}

const replace = createLookup([['US', 'USD'], ['CA', 'CAD']]);
console.log(replace )

/* ======= Test suite is provided below... =====
 */

module.exports = createLookup;

//const lookup = require("./lookup")

//  test("converts a single pair of currency codes", () => {
//   expect(createLookup([["GB", "GBP"]])).toEqual({
//     GB: "GBP",
//   });
//   expect(createLookup([["DE", "EUR"]])).toEqual({
//     DE: "EUR",
//   });
// });

// test.todo("creates a country currency code lookup for multiple codes");












