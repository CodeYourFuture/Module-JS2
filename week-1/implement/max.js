function compareNum(a, b) {
  return a - b;
}
function max(arr) {
  const newArr = [];
  if (arr.length === 0) {
    return "-Infinity";
  } else {
    for (const item of arr) {
      if (typeof item === "number") {
        newArr.push(item);
      }
    }
    return newArr.sort(compareNum)[newArr.length - 1];
  }
}


module.exports = {
    compareNum,
    max};