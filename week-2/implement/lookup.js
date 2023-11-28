function createLookup(countryCurrencyPairs) {
  // implementation here
  // empty object to store the lookup of country, Currency Pairs
  const lookup = {};

  // Iterate through each country-currency pair in the array
  for (const pairs of countryCurrencyPairs) {
    const [countryCode, currencyCode] = pairs;

    // store the values of the currency code to the country code in the lookup object
    lookup[countryCode] = currencyCode;
  }

  return lookup;
}
console.log(createLookup([["US", "USD"],["CA", "CAD"]]));

/* ======= Test suite is provided below... =====
 */
/*
test("converts a single pair of currency codes", () => {
  expect(createLookup([["GB", "GBP"]])).toEqual({
    GB: "GBP",
  });
  expect(createLookup([["DE", "EUR"]])).toEqual({
    DE: "EUR",
  });
});

test.todo("creates a country currency code lookup for multiple codes");
*/
module.exports = createLookup;