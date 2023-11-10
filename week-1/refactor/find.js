// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (const element of list) {
    if(element === target){
      index = list.indexOf(element);
      return index;
    }
  }
  return -1;
}
console.log(find(["a", "b", "c", "d"], "c"));
module.exports = find;
