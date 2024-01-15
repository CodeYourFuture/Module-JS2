function createLookup(countryCurrencyArray) {
  const lookup = {};

  for (let element of countryCurrencyArray) {
    lookup[element[0]]= element[1];
  }
  return lookup;
}


module.exports = createLookup;
