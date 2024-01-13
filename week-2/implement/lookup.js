function createLookUp(currencyPairs) {
  const lookup = {}; // we need an empty object to use for storing data

  // here  we're using a loop to go through every individual array inside the main array
  for (const pair of currencyPairs) {
    // array in her bir elemanını tek tek almanı sağlar.
    const [countryCode, currencyCode] = pair; // this extracts country and currency codes from the inner array
    lookup[countryCode] = currencyCode; //  here we assign the country code as the key AND currency code as its value
  }

  return lookup; // Returns the created object containing the key-value pairs
}

module.exports = createLookUp;

/* ======= Test suite is provided below... =====
 */

test("converts a single pair of currency codes", () => {
  expect(createLookUp([["GB", "GBP"]])).toEqual({
    GB: "GBP",
  });
  expect(createLookUp([["DE", "EUR"]])).toEqual({
    DE: "EUR",
  });
});
//test.todo("creates a country currency code lookup for multiple codes");
test("creates a country currency code lookup for multiple codes", () => {
  expect(
    createLookUp([
      ["US", "USD"],
      ["CA", "CAD"],
    ])
  ).toEqual({
    US: "USD",
    CA: "CAD",
  });
});
