// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  let count = -1;
  for (item of list) {
    count++;
    if (item === target) {
      return count;
    }
  }
  return -1;
}

console.log(find(["a", "b", "c", "d"], "s"));
console.log(find(["a", "b", null, "d"], null));
console.log(find(["a", "b", null, "d"], []));

module.exports = find;
