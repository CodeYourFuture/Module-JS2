function numSort(a, b) {
  return a - b;
}
function max(list) {
  const maxNumber = [];
  if (list.length === 0) {
    return "-Infinity";
  } else {
    for (const item of list) {
      if (typeof item === "number") {
        maxNumber.push(item);
      }
    }
    return maxNumber.sort()[maxNumber.length - 1];
  }
}
