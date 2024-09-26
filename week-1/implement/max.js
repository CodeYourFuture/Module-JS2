function maxNum(list) {
  let maximum = -Infinity;
  for (let x of list) {
    if (x > maximum && !x.isNaN) {
      maximum = x;
    }
  }
  return maximum;
}

module.exports = maxNum;
