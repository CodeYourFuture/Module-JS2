function dedupe(arr) {
  let data = [];
  arr.forEach((element) => {
    if (!data.includes(element)) {
      data.push(element);
    }
  });
  return data;
  //   return arr.filter((item, index) => arr.indexOf(item) === item);
}

module.exports = dedupe;
