function dedupe(list) {
  let dedupeArray = [];
  for (const letter of list) {
    if (!dedupeArray.includes(letter)) {
      dedupeArray.push(letter);
    }
  }
  return dedupeArray.length === 0
    ? "given an empty array, it returns an empty array"
    : dedupeArray;
}

console.log(dedupe([]));
