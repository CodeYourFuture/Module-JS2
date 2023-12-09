// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (const element of list){
    if (element === target) {
      return list.indexOf(element);
    }
  }
  return -1;
}

module.exports = find;
