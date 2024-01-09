function tally(array) {
  const frequency = {};
  for (const item of array) {
    frequency[item] = (frequency[item] || 0) + 1;
  }
  return frequency;
}

console.log(tally(["a"]));
console.log(tally(["a", "a", "a"]));
console.log(tally(["a", "a", "b", "c"]));
