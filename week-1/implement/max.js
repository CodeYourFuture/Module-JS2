function findMax(numbers) {
  return Math.max(...numbers.filter((item) => typeof item === "number"));
}

module.exports = findMax;
