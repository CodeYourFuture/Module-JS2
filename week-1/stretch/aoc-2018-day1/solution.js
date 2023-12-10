// function puzzle(stars){
//     let output = []
//     const arr = stars.reduce((a, b) => a + b, 0)
//     for (let i = 0; i < stars.length; i++){
//         output.push[i];

//     }
//     return arr;
// }



//console.log(puzzle([2,6,-5,-4,9]))


const fs = require('fs');

function puzzle(stars) {
    let output = [];
    const arr = stars.reduce((a, b) => a + b, 0);
    for (let i = 0; i < stars.length; i++) {
        output.push[i];
    }
    return arr;
}

// Read data from input.txt

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }

//     // Parse the data into an array of integers
//     const inputArray = data.split('\n').map(Number);

//     // Call the puzzle function with the input data
//     console.log(puzzle(inputArray))
// });
