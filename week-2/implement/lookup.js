function createLookup(givenArray) {
  let newObject = {};
  for (let element of givenArray) {
    newObject[element[0]] = element[1];
  }
  return newObject;
}
console.log(createLookup([["abc", "def"]]));
/* ======= Test suite is provided below... =====
 */
module.exports = createLookup;
