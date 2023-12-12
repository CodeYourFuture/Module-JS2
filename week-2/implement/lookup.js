function createLookup(countryAndCurrencyArray) {
  return countryAndCurrencyArray.reduce((obj, [countryCode, currency]) => {
    obj[countryCode] = currency;
    return obj;
  }, {});
  // implementation here
}

/* ======= Test suite is provided below... =====
 */
// Test suite moved to test file

module.exports = createLookup;