function findMax(arr) {
  if (arr.length === 0) {
    return -Infinity; //
  }
  let maxNum = -Infinity;

  /*for(let i= 0; i < arr.length; i++) {
    const num = arr[i]; 
 }
    // for loop iterates through each element of an array and iterates arr.length times: It visits all elements of the array. same with for (let num of arr) {}  */

  for (let num of arr) {
    if (typeof num === `number` && !isNaN(num) && num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = findMax;

const array1 = [30, 50, 10, 40];
const array2 = ["hey", 10, "hi", 60, 10];

console.log("Max of array1:", findMax(array1)); // Expected output: 50
console.log("Max of array2:", findMax(array2)); // Expected output: 60

//for me > -Infinity serves as the reference point for the lowest possible numeric value, ensuring any real number in a dataset is larger, hence acting as the starting marker in finding the largest numeric value within an array.
// ?? -Infinity başlangıç değeri olarak atanıyor çünkü herhangi bir gerçek sayının bu değerden daha küçük olacağı garanti edilmiş olur. Bu, ilk karşılaştırma yapıldığında ilk sayının bu değerden daha büyük olduğu anlamına gelir ve dolayısıyla maxNum bu sayı ile güncellenir. Bu, en büyük sayıyı bulmak için bir referans noktası sağlar.-Infinity sayesinde, ilk gerçek sayı maxNum'dan büyük olduğunda maxNum bu değerle güncellenir ve ardından dizi içindeki en büyük gerçek sayı bulunur.
