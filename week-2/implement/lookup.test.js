// ======= Test suite is provided below... =======
const createLookup = require('./lookup.js');
test("converts a single pair of currency codes", () => {
  const input =  [['GB', 'GBP'],['CA','CAD']];
  const expectedOutput = { GB: 'GBP', CA: 'CAD'}
  expect(createLookup(input)).toEqual(expectedOutput);
  });
    test('handles a single pair correctly', () => {
    const input = [['JP', 'JPY']];
    const expectedOutput = { JP: 'JPY' };
    expect(createLookup(input)).toEqual(expectedOutput);
  });
   test('handles an empty array', () => {
    const input = [];
    const expectedOutput = {};
    expect(createLookup(input)).toEqual(expectedOutput);
  });
    test('overwrites duplicate country codes with the latest currency code', () => {
    const input = [['US', 'USD'], ['US', 'USDT']];
    const expectedOutput = { US: 'USDT' }; // Latest value should overwrite the previous.
    expect(createLookup(input)).toEqual(expectedOutput);
  });
    test('handles non-string country or currency codes', () => {
    const input = [[123, 456]];
    const expectedOutput = { 123: 456 };
    expect(createLookup(input)).toEqual(expectedOutput);
  });
test.todo("creates a country currency code lookup for multiple codes");

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
