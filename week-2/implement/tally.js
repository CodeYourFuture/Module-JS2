function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Invalid input,input must be an array");
  }
  const result = {};
  for (const item of items) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  return result;
}
console.log(tally(["a"]));
console.log(tally(["a", "a", "a"]));
console.log(tally(["a", "a", "b", "c"]));
console.log(tally([]));

module.exports = tally;
