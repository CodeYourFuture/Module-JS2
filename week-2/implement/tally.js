function tally(array) {
  if (Array.isArray(array)) {
  return array.reduce((obj, item) => {
    !obj.hasOwnProperty(item) ? obj[item] = 1 : obj[item]++;
    return obj;
  }, {}) }
  throw new Error('tally() expects an array of items')
}

module.exports = tally;