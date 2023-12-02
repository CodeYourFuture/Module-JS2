function max(array) {
  let tempArray
  switch (true) {
    case array.length === 0:
      return "-Infinity"
    case array.length === 1 && !isNaN(array[0]):
      return array[0]
    case array.length > 1:
      tempArray = array.filter((e) => !isNaN(e))
      return Math.max(...tempArray)
    default:
      return "Invalid Array"
  }
}

module.exports = max;