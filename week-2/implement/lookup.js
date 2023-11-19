function createLookup(arr) {
  // implementation here
  const newObj = {};
  for (const items of arr){
    const [keyItem, valueItem] = items;
    newObj[keyItem] = valueItem;
  }
  return newObj;
}

// console.log(createLookup([["GB", "GBP"]]));
// console.log(
//   createLookup([
//     ["US", "USD"],
//     ["CA", "CAD"],
//   ])
// );

module.exports = createLookup;
/* ======= Test suite is provided below... =====
 */

// test("converts a single pair of currency codes", () => {
//   expect(createLookup([["GB", "GBP"]])).toEqual({
//     GB: "GBP",
//   });
//   expect(createLookup([["DE", "EUR"]])).toEqual({
//     DE: "EUR",
//   });
// });

// test.todo("creates a country currency code lookup for multiple codes");
