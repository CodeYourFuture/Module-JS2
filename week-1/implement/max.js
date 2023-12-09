// Manual check
// function max(input){
//     if(input.length == 0){
//         return -Infinity;
//     }

//     if(input.length == 1){
//         return input[0];
//     }
//     let maxNum = input[0]; 
//     for (let i=0; i<input.length; i++){
//         if(typeof input[i] !== 'string'){
//             maxNum = input[i]
//             break;
//         }
//     }

//     for (let i=1; i<input.length; i++){
//         if(input[i] > maxNum){
//             maxNum = input[i];
//         } 
//     }
//     return maxNum;
// }


function max(input){
    let output = [];
    for(let i=0; i<input.length; i++){
        if (typeof input[i] !== 'string') {
          output.push(input[i]);
        }
    }
    return Math.max(...output);
}



module.exports = max;
