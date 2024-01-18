function tally(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid input, only use arrays";
  }
  const obj = {};
  for (const items of arr) {
    if (obj[items]) {
      obj[items]++;
    } else {
      obj[items] = 1;
    }
  }
  return obj;
}

module.exports = tally;
