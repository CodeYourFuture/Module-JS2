function createLookup(countryAndCurrencyArray) {
  if (!Array.isArray(countryAndCurrencyArray) || countryAndCurrencyArray.length === 0) {
    throw new Error("Input must be an array with ata least one country code and currency pair");
  }
  const countryAndCurrencyObject = countryAndCurrencyArray.reduce((obj, [countryCode, currency]) => {
    obj[countryCode] = currency;
    return obj;
  }, {});
  return countryAndCurrencyObject;
}

/* ======= Test suite is provided below... =====
 */
// Test suite moved to test file

module.exports = createLookup;