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
  expect(createLookup([["GB", "GBP"]])).toEqual({
    GB: "GBP",
  });
  expect(createLookup([["DE", "EUR"]])).toEqual({
    DE: "EUR",
  });
});

test.todo("creates a country currency code lookup for multiple codes");
