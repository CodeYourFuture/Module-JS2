
function sum(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] !== "string") {
      output.push(input[i]);
    }
  }
  let total = 0;
  for (let i = 0; i < output.length; i++){
    total = total + output[i];
  }
  return total;
}





module.exports = sum;
