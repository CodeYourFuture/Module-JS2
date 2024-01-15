function createLookup(currencyPairs) {
  const lookup = {};

  for (const pair of currencyPairs){
    const [countryCode, currencyCode] = pair; 
    lookup [countryCode] = currencyCode;
  }

  return lookup;
}

module.exports = createLookup
