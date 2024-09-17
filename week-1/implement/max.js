function findMax(array){
    let numericalArray=[];
    for(let item of array){
        if(typeof item==='number'){
            numericalArray.push(item);

        }
    }
    let maxOfArray=Math.max(...numericalArray);

    
    return maxOfArray;
   
}


module.exports=findMax;
