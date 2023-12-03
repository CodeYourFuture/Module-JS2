function max(numbers) {
  const largestNumber = Math.max(...numbers);
  for (element of numbers) {
    if (typeof element === "string") {
      const arrWithoutStrings = numbers.filter(
        (strings) => typeof strings === "number"
      );
      return Math.max(...arrWithoutStrings);
    }
  }
  return largestNumber;
}

module.exports = max;
