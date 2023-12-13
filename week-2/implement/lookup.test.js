

/*

Create a lookup object of key value pairs from an array of code pairs
ßß
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



const lookup = require('./lookup.js');

// Test case 1: Converts a single pair of currency codes
test('Converts a single pair of currency codes', () => {
  expect(lookup([['GB', 'GBP']])).toEqual({
    GB: 'GBP',
  });
  expect(lookup([['DE', 'EUR']])).toEqual({
    DE: 'EUR',
  });
});

// Test case 2: Creates a country currency code lookup for multiple codes (to be implemented)
test.todo('Creates a country currency code lookup for multiple codes');
