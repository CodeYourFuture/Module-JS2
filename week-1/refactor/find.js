// Refactor the implementation of find to use a for...of loop

// function find(list, target) {
//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     if (element === target) {
//       return index;
//     }
//   }
//   return -1;
// }

//my refactor implementation:This way, you iterate over the elements of the list using a for...of loop, making the code cleaner and more concise.
function find(list, target){
  let index = 0;
  for(const element of list){
    if (element === target){
      return index;
    }
    index++;
  }
  return -1;
}
module.exports = find;
