// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return index;
    }
  }
  return -1;
}
console.log(find([3, 2, 6, 9], 2));

module.exports = find;
