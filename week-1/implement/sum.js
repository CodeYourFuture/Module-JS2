function sum(array) {
  let result = array.reduce((acc, curr) => !isNaN(curr) ? acc + curr : acc + 0, 0)
  return result
}

module.exports = sum;