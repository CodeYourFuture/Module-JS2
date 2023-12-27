function createLookup(countryCurrencyPairs) {
  // implementation here
  const lookup = {};
  for (const pair of countryCurrencyPairs) {
    const [countryCode, currencyCode] = pair;
    lookup[countryCode] = currencyCode;
  }
  return lookup;
}

console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

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
