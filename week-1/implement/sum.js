function sumOfArray(arr){
    let sum=arr.reduce(
        (accomulation,value)=>
            (typeof value==='number' ? accomulation+value:accomulation),0)
        
    return sum;
}

module.exports=sumOfArray;
// console.log(sumOfArray([]));