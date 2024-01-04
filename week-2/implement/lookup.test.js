const createLookup = require('./lookup');

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
  expect(createLookup([["US", "USD"], ["CA", "CAD"], ["GB", "GBP"]])).toEqual({
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  });
})

const isNotAnArrayError = "Input must be an array with ata least one country code and currency pair"

test("throws an error if the input is not an array", () => {
  expect(() => createLookup([])).toThrowError(new Error(isNotAnArrayError));
  expect(() => createLookup(123)).toThrow(new Error(isNotAnArrayError));
  expect(() => createLookup("string")).toThrow(new Error(isNotAnArrayError));
  expect(() => createLookup({})).toThrow(new Error(isNotAnArrayError));
  expect(() => createLookup(null)).toThrow(new Error(isNotAnArrayError));
  expect(() => createLookup(undefined)).toThrow(new Error(isNotAnArrayError));
});