// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (const element of list) {
    if (element === target) {
      return list.indexOf(element);
    }
  }
  // for (let index = 0; index < list.length; index++) {
  //   const element = list[index];
  //   if (element === target) {
  //     return index;
  //   }
  // }
  return -1;
}

module.exports = find;
