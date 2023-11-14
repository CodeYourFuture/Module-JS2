function createLookup(arr) {
  let obj = {};
  for (const index of arr) {
    let key = index[0];
    let value = index[1];
    obj[key] = value;
  }

  return obj;
}

/* ======= Test suite is provided below... =====
 */

module.exports=createLookup;
