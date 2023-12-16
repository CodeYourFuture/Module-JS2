function dedupe(list) {
  let dedupeArray = [];
  for (const letter of list) {
    if (!dedupeArray.includes(letter)) {
      dedupeArray.push(letter);
    }
  }
  return dedupeArray.length === 0 ? "Is an empty array" : dedupeArray;
}

console.log(dedupe([]));
