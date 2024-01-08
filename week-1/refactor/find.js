// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (let x of list) {
    const element = x;
    if (element === target) {
      return list.indexOf(x);
    }
  }
  return -1;
}

module.exports = find;
