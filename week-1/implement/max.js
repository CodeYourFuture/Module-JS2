function getMaxNumber(items) {
  let max = -Infinity;
  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === "number" && !isNaN(items[i])) {
      max = Math.max(max, items[i]);
    }
  }
  return max !== -Infinity ? max : -Infinity;
}



module.exports = getMaxNumber;