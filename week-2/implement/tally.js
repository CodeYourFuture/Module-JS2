function tally(arr){
if(!Array.isArray(arr)){
    throw new Error('Input must be an array');
}
let count = {};
for(let i=0; i<arr.length; i++){
   const element = arr[i];
   count[element] = (count[element] ||0)+1;
}
return count;
}
console.log(tally(["a", "b", "a", "z", "e", "a", "b", "f", "d", "f"]));
module.exports = tally;