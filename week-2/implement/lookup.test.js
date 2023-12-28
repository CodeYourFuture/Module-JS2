/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/

const createLookUp = require("./lookup.js");

describe("createLookup function tests", () => {
  test("converts a single pair of currency codes", () => {
    // Given
    const inputGB = [["GB", "GBP"]];
    const inputDE = [["DE", "EUR"]];

    // When
    const resultGB = createLookUp(inputGB);
    const resultDE = createLookUp(inputDE);

    // Then
    expect(resultGB).toEqual({ GB: "GBP" });
    expect(resultDE).toEqual({ DE: "EUR" });
  });

  test("creates a country currency code lookup for multiple codes", () => {
    // Given
    const multiplePairsInput = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];

    // When
    const result = createLookUp(multiplePairsInput);

    // Then
    expect(result).toEqual({
      US: "USD",
      CA: "CAD",
    });
  });
});
