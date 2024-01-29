const lookup = require("./lookup.js");
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
describe("lookup function", () => {
  test("Given an array representing Country and currency code pairs, then it should return an object where the key is the country and the value is the currency", () => {
    expect(lookup(["US", "USD"], ["CA", "CAD"])).toEqual(
      {"US" : "USD",
      "CA", "CAD"})
  })
})