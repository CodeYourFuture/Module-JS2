//manual check
// function dedupe(input) {

//     let output = [];

//     for(let i=0; i<input.length; i++){
//       let duplicate = false;

//       for (let j = 0; j < output.length; j++) {
//         if (input[i] === output[j]) {
//           duplicate = true;
//         }
//       }

//       if (!duplicate) {
//         output.push(input[i]);
//       }
//     }

//     return output;
// }


function dedupe(input) {

    let output = [];

    for(let i=0; i<input.length; i++){

      if (!output.includes(input[i])) {
        output.push(input[i]);
      }
    }

    return output;
}












module.exports = dedupe;
