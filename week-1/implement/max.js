function max(arr) {
  const numericValues = arr.filter(
    (value) => typeof value === "number" && !isNaN(value)
  );

  if (numericValues.length === 0) {
    return -Infinity;
  }

  return Math.max(...numericValues);
}
