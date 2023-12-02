// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (const e of list) {
    if (e === target) {
      return list.indexOf(e)
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
