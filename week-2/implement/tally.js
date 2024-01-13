function tally(arr) {
  let newObj = {};
  if (Array.isArray(arr)) {
    if (arr.length != 0) {
      for (let x of arr) {
        if (newObj.hasOwnProperty(x)) {
          newObj[x]++;
        } else {
          newObj[x] = 1;
        }
      }
    }
    return newObj;
  } else {
    throw new TypeError("Given value is not an Array");
  }
}

module.exports = tally;
