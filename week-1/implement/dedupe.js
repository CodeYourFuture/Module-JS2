function dedupe(array) {
    const setOfArray=new Set(array);
    const arrayCopy=Array.from(setOfArray);

    return arrayCopy;
}

// console.log(dedupe([]));
// console.log(dedupe([1,1,2,3,4,4,5,5,5,6,1,9,9]));
// console.log(dedupe(['a','a','b','g','b',1,2,1,1,3,4,5,3,'a']));
 module.exports=dedupe;