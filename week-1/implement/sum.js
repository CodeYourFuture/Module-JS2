function sum(list) {
  if (list.length === 0) {
    return 0;
  } else {
    let sumOfNum = 0;
    for (let x of list) {
      if (!isNaN(x)) {
        sumOfNum += x;
      }
    }
    return sumOfNum;
  }
}

module.exports = sum;
