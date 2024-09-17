// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (let item of list) {
    if (item === target) {
      return list.indexOf(item);
    }
  }
  return -1;
}

module.exports = find;

