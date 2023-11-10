function compareNum(a, b) { //this function addresses the side-effect of .sort() by comparing two items of
  return a - b; //the array and returning the smallest first. This ensures .sort() does not return 6 as bigger than 10 (since it typically looks at the first digit rather than the value of the number)
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