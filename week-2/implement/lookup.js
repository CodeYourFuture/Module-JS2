function createLookup(countryCurrencyPairs) {
  // implementation here
  const obj ={};
  for(const pair of countryCurrencyPairs){
    if(pair.length ===2){
      const [countryCode, currencyCode]= pair;

      obj[countryCode]=currencyCode;

    }else{
      const [countryCode, currencyCode] = countryCurrencyPairs;
      obj[countryCode] = value;
    }
  }
  return obj;
}


module.exports = createLookup;
/* ======= Test suite is provided below... =====
 */

// test("converts a single pair of currency codes", () => {
//   expect(createLookup([["GB", "GBP"]])).toEqual({
//     GB: "GBP",
//   });
//   expect(createLookup([["DE", "EUR"]])).toEqual({
//     DE: "EUR",
//   });
// });

// test.todo("creates a country currency code lookup for multiple codes");
