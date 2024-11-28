function createLookup(countryCurrencyPairs) {
  // implementation here
  const lookup = {};
  for (const pair of countryCurrencyPairs) {
    const [countryCodes, currencyCodes] = pair;
    lookup[countryCodes] = currencyCodes;
  }
  return lookup;
}
const countryCurrencyPairs = [
  ["US", "USD"],
  ["CA", "CAD"],
];
console.log(createLookup(countryCurrencyPairs));

module.exports = createLookup;
