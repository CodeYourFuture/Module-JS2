function createLookup(countryCurrencyPairs) {
    const lookup = {};
  
    for (const pair of countryCurrencyPairs) {
      const [countryCode, currencyCode] = pair;
      lookup[countryCode] = currencyCode;
    }
  
    return lookup;
  }
  
  module.exports = createLookup;
  
  
  /* ======= Test suite is provided below... =====
   */
  
  test("converts a single pair of currency codes", () => {
    expect(createLookup([["GB", "GBP"]])).toEqual({
      GB: "GBP",
    });
    expect(createLookup([["DE", "EUR"]])).toEqual({
      DE: "EUR",
    });
  });
  
  test.todo("creates a country currency code lookup for multiple codes");