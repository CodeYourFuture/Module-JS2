function sum(arr) {
  return arr.reduce((total, value) => {
    if (typeof value === "number" && !isNaN(value)) {
      return total + value;
    }
    return total;
  }, 0);
}
