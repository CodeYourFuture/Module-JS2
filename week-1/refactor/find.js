// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  // for (let index = 0; index < list.length; index++) {
  //   const element = list[index];
  //   if (element === target) {
  //     return index;
  //   }
  // }
  // return -1;

  let arrayIndex = [];
  for (const item of list) {
    if (item === target) {
      return list.indexOf(item);
    }
  }
  return -1;
}

module.exports = find;

array1 = ["a", "b", "c", "d"];
console.log(find(array1, "c"));
array2 = [1, 2, 3, 4];
console.log(find(array2, "a"));
array3 = [1, 2, 2, 3];
console.log(find(array3, 2));
array4 = [];
console.log(find(array4));
array5 = ["b", "z", null, "a"];
console.log(find(array5, null));
