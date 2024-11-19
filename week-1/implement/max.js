function max(array) {
  const Numbers = array.filter((items) => typeof items === "number");

  if (Numbers.length === 0) {
    return -Infinity;
  }
  return Math.max(...Numbers);
}
module.exports = max;
