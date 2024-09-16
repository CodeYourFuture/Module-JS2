function sum(numbers) {
  return numbers.reduce(
    (acc, num) => acc + (typeof num === "number" ? num : 0),
    0
  );
}

module.exports = sum;
