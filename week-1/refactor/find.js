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
function find(list, target){
  for(let i = 0; i < list.length; i++){
    if(list[i] === target){
      return list.indexOf(target);
    }
  }
  return -1;
}


module.exports = find;
