// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  if (list.includes(target)) {
    return list.indexOf(target);
  }
return -1;
}

module.exports = find;
