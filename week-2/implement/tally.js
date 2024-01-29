function tally(array) {
  const frequency = {};
  for (const item of array) {
    frequency[item] = (frequency[item] || 0) + 1;
  }
  return frequency;
}
