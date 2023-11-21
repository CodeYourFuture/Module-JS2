function createLookup(countryCurrencyPairs) {
  // implementation here
  let myCurrency = {};
  for (const pair of countryCurrencyPairs ) {
    const [countryCode, currencyCode] = pair;
    myCurrency[countryCode] = currencyCode;
  }
  return myCurrency;
}
const result = createLookup([
  ["GB", "GBP"],
  ["DE", "EUR"],
]);
console.log(result);

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

module.exports = createLookup;