function contains(obj,char) {
  return (Object.keys(obj).includes(char)) ? true:false;
};

const myNum = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
console.log(contains(myNum, ""));

module.exports = contains;