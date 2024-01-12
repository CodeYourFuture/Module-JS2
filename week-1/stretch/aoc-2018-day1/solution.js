/* flowchart: *Start
 *Read the content of input.txt file containing frequency changes.
 *Split the content into individual lines and convert each line into a number.
 *Initialize the currentFrequency variable to 0.
 *Process each frequency change:
 *Add each change to the currentFrequency.
 *Display the resulting frequency in the console.
 *End */

const fs = require("fs"); // fs (file system)
const input = fs.readFileSync("input.txt", "utf8"); // read the input file that contains frequency changes

// Split the input into lines and process each line as a separate frequency change
const frequencyChanges = input.trim().split("\n").map(Number);

//   Initialize the current frequency to zero
let currentFrequency = 0;

//  Process each frequency change to calculate the resultant frequency
for (let i = 0; i < frequencyChanges.length; i++) {
  currentFrequency = frequencyChanges[i];

  // Update the current frequency by applying the frequency change
}

// Log the resulting frequency to the console
console.log("Resulting Frequency:", currentFrequency);

// for me : This line uses Node.js's fs module to read the contents of the input.txt file, assuming it holds frequency change data.
//trim() removes any unnecessary white spaces or newlines from the beginning and end of the input.
//split('\n') divides the input text into separate lines based on newline characters (\n).
//map(Number) converts each line (assumed to be a string) into a number, creating an array (frequencyChanges) of these numeric frequency changes.
//let currentFrequency = 0; Sets the initial value of currentFrequency to zero before processing the changes.
// for... , const... ,  currentFrequency += change..., this code iterates through each frequency change (represented by change), updating the currentFrequency variable by adding each change to it.
