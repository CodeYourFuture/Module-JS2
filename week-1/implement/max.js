function max(list) {
  let maxValue = -Infinity;

  for (const element of list) {
    if (typeof element === 'number' && !isNaN(element)) {
      if (element > maxValue) {
        maxValue = element; 
      }
    }
  }

  return maxValue;
}

module.exports = max;
