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

const createLookup = require("./createLookup.js");

test("returns an object with country codes as keys and currency codes as values", () => {
  const countryCurrencyPairs = [['US', 'USD'], ['CA', 'CAD']];
  const expectedLookup = {
    'US': 'USD',
    'CA': 'CAD'
  };

  const result = createLookup(countryCurrencyPairs);

  expect(result).toEqual(expectedLookup);
});
