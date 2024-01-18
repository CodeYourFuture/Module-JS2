function createLookup(array) {
  // implementation here
  let object = {};
  for (const element of array) {
    const [country, currency] = element;
    object[country] = currency;
  }
  return object
}
console.log(createLookup["abc", "xyz"]);

module.exports = createLookup
