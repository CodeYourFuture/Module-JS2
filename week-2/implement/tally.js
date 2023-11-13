function tally(array) {
  if (array.length === 0) {
    return {};
  }
  else if(!Array.isArray(array)) {
    return "Invalid input";
  }
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

module.exports = tally;
