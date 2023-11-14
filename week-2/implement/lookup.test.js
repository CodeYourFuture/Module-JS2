const createLookup  = require("./lookup.js");
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

test("converts a single pair of currency codes", () => {
  expect(createLookup([["GB", "GBP"]])).toEqual({
    GB: "GBP",
  });
  expect(createLookup([["DE", "EUR"]])).toEqual({
    DE: "EUR",
  });
});

test("converts multiple pairs of currency codes", () => {
  expect(createLookup([["GB", "GBP"],["US", "USD"]])).toEqual({
    GB: "GBP",
    US:'USD'
  });
  expect(createLookup([["DE", "EUR"],["PK", "RUP"],["GB", "GBP"],["EU", "EUR"]])).toEqual({
    DE: "EUR",
    PK:'RUP',
    GB:'GBP',
    EU:'EUR'
  });
});

test.todo("creates a country currency code lookup for multiple codes");