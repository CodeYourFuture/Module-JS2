function findTheSum(list){
    if (list.length === 0) {
        return 0;
    }
    if (list.length === 1) {
        return Number(list);
    }
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        
       if (typeof(list[i])==="number") {
            sum += list[i];
        }
    }
    return sum;
}

module.exports=findTheSum;