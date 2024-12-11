function max(array) {
  if (array && array.length > 0) {
    let maxValue = array.filter((value) => typeof value === 'number').reduce((a, b) => a > b ? a : b);
    return maxValue;
  }
  return "-Infinity"
}

module.exports = max;