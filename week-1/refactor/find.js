// Refactor the implementation of find to use a for...of loop

function find(list, target) {
  for (let item of list) {
    if (item === target) {
      return list.indexOf(item);
    }
  }
  return -1;
}

// function find(list, target) {

//   if(list.includes(target)){
//     return list.indexOf(target);
//   }
//   else return -1;
  
// }



console.log(find(["a", "b", "c", "d"], "c"));
console.log(find([1, 2, 3, 4], "a"));
console.log(find([]));
console.log(find(["b", "z", null, "a"], null));

module.exports = find;
