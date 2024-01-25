function countString(arr){
    const count={};
    for(let i=0;i<arr.length;i++){
    const num =arr[i];
    count[num]=(count[num] || 0)+1;
}
return count;
}
console.log(countString(['a','b','c','a','d','e','b','c','c','c']));
module.exports = countString;