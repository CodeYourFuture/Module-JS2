function dedupe(arr) {
  const deduplicatedArray = [];

  for (const item of arr) {
    if (!deduplicatedArray.includes(item)) {
      deduplicatedArray.push(item);
    }
  }

  return deduplicatedArray;
}

console.log(dedupe(["a", "a", "a", "b", "b", "c"]));

module.exports = dedupe;
