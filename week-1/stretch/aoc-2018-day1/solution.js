const fs = require('fs');
const fileName = 'input.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log('Error:', err);
    return;
  }
  const frequencyArray = data.split('\n').map(Number);

  let chronalCalibrationValue = frequencyArray.reduce((acc, curr) => acc + curr, 0);

  console.log(chronalCalibrationValue);
}
)


// Solution: 529
