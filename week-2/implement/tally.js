function tally(tallyArray){
    
    const tallyObject={};
    if(Array.isArray(tallyArray)){ // to check out if the input has a proper type [Array]
        const setOfTally=new Set(tallyArray); // to create unique item of each array
        for(let item of setOfTally){
            let count=tallyArray.filter(x=> x==item).length;
            
            tallyObject[item]=count;

        }
        return tallyObject;
    }

    else return new Error('input should be an array data type !');

    
}

module.exports=tally;

// console.log(tally([1,1,2,2,2,3,4,4,4,4]));
// console.log(tally('stringgg'));