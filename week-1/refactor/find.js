// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (const item of list) {
    if (item === target) {
      return list.indexOf(item)
    }
  } return -1

  /*   for (let index = 0; index < list.length; index++) {
      const element = list[index];
      if (element === target) {
        return index;
      }
    }
    return -1; */
}

module.exports = find;
