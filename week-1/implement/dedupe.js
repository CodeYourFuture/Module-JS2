function dedupe(arr) {
  const duplicateWordsRemoved = arr.filter(
    (item, index) => arr.indexOf(item) === index
  );
  return Array.from(new Set(duplicateWordsRemoved));
}

module.exports = dedupe;
