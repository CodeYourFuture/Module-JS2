function createLookup(arrays) {
  const countryCurrency = {};

  if (Array.isArray(arrays[0])) {
    for (const array of arrays) {
      const [key, value] = array;
      countryCurrency[key] = value;
    }
  } else {
    const [key, value] = arrays;
    countryCurrency[key] = value;
  }

  return countryCurrency;
}

console.log(createLookup(["KE", "KSH"]));
console.log(
  createLookup([
    ["KE", "KSH"],
    ["TR", "TRY"],
  ])
);

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
