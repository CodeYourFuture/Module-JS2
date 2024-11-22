function createLookup(countryCurrencyPairs) {
  const lookUp ={};
  for (const [countryCode,currencyCode] of countryCurrencyPairs) {
    lookUp[countryCode] = currencyCode;
  }
  return lookUp;
}
// const countryCurrencyPairs = [['US' , 'USD'], ['CA', 'CAD']];
// const result = createLookup(countryCurrencyPairs);
// console.log(result);
module.exports = createLookup;