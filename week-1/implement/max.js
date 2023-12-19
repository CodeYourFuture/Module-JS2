function findMaximumNum (list){
    if(list.length === 0){
        return -Infinity;
    }
    if(list.length===1){
        return list[0];  
    }
    
   for(const item of list){
    let max=0;
    if(item>max && typeof(item)==="number"){
        max=item;
    }
    
   }return max;
}
// console.log([-2,'@',6,3]);



  
module.exports = findMaximumNum;
