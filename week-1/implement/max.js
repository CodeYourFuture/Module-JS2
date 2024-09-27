function max(maximum) {
  if (maximum.length === 0) {
    return Infinity;
  }
  return Math.max(...maximum);
}

const array = [39, 55, 12, 66, 14];
console.log(max(array)); //Output 66

const emptyArray = [];
console.log(max(emptyArray)); // Infinity

const arraywithOneIndex = [2];
console.log(max(arraywithOneIndex)); // Output : 2

const arrayPostiveNagativeNumber = [12, -14]; // Output: 12
console.log(max(arrayPostiveNagativeNumber));

const arrayWithDecimal = [12.3, 15.15, 10.12, 9.16]; // 15.15
console.log(max(arrayWithDecimal));

const arrayWithNonNumberValue = [12, "hi", 1, 15, "max", "decimal"];
console.log(max(arrayWithNonNumberValue));
