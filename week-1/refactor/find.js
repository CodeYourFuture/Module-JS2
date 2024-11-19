// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  let index = 0;
  for (const element of list) {
    if (element === target) {
      return index;
    }
    index++;
  }

  return -1;
}

module.exports = find;
