function calculateSum(list) {
    let total = 0;

    if(list.length === 0){
        return 0;
    }
    else if(list.length===1){
        return list[0];
    }
    for(i = 0; i < list.length; i++){
        if (typeof list[i] === "number" && !isNaN(list[i])){
            total = total += list[i];
        }
    }
    return total;

    }
    
console.log(calculateSum([5,-4,1,"y"]));

module.exports = calculateSum;
