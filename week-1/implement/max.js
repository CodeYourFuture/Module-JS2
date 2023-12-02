function findMaximumNum (list){
    if(list.length===0){
    return -Infinity;
    }

    if(list.length===1){
        return list[0];
    }
    let max=0
    for(let item of list){
        
        if(item>max && typeof(item)==="number"){
            max=item
        }
        
    }
    return max;
}
console.log(findMaximumNum([-7, `b`,9,6]));

module.export = module.exports = findMaximumNum;