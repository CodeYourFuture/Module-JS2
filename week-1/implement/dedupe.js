function dedupe(list) {
  const newList = [];

  for (const item of list) {
    if (!newList.includes(item)) {
      newList.push(item);
    }
  }

  return newList;
}

console.log(dedupe(["a", "a", "b", "c", "d", "e", "f", "f", "f"]));
