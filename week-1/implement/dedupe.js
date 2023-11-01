function dedupe(items) {
  let updatedArray = [];

  if (items.length === 0) {
    return updatedArray;
  }
  for (i = 0; i < items.length; i++) {
    if (!updatedArray.includes(items[i])) {
      updatedArray.push(items[i]);
    }
  }
  return updatedArray;
}

module.exports = dedupe;

console.log(dedupe([4,4,8,0,3,"e",0]));
