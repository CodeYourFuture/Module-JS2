function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const counts = {};
  for (let item of items) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}

module.exports= tally;
