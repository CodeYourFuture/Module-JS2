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

function createLookup(money) {
  const currency = {};
  const [key, value] = money;
  currency[key] = value;
  return currency;

  // implementation here
}
console.log(createLookup(["GB", "GBP"]));

/* ======= Test suite is provided below... =====
 */

test("converts a single pair of currency codes", () => {
  expect(createLookup(["GB", "GBP"])).toEqual({ GB: "GBP" });
  expect(createLookup(["DE", "EUR"])).toEqual({ DE: "EUR" });
});

test("converts a single pair of currency codes", () => {
  expect(createLookup(["US", "USD"])).toEqual({ US: "USD" });
  expect(createLookup(["JP", "JPY"])).toEqual({ JP: "JPY" });
});

test("converts a single pair of currency codes", () => {
  expect(createLookup(["DE", "EUR"])).toEqual({ DE: "EUR" });
});

test("converts a single pair of currency codes", () => {
  expect(createLookup(["AF", "AFN"])).toEqual({ AF: "AFN" });
  expect(createLookup(["CA", "CAD"])).toEqual({ CA: "CAD" });
});
test.todo("creates a country currency code lookup for multiple codes");

test("converts a single pair of currency codes", () => {
  expect(createLookup(["AU", "AUD"])).toEqual({ AU: "AUD" });
  expect(createLookup(["IN", "INR"])).toEqual({ IN: "INR" });
});
