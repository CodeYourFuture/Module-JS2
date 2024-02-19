// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  let arrayIndex = [];
  for (const item of list) {
    if (item === target) {
      return list.indexOf(item);
    }
  }
  return -1;
}

module.exports = find;
