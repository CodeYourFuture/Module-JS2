function dedGiven(arr) {
  return [...new Set(arr)];
}

const arrayWithDuplicatesNumber = [5, 1, 1, 2, 3, 2, 5, 8];
const deduplicatedArrayNum = dedGiven(arrayWithDuplicatesNumber);
console.log(deduplicatedArrayNum); // Output: [5, 1, 2, 3, 8]

const arrayWithDuplicatesLatter = ["a", "a", "a", "b", "b", "c"];
const deduplicatedArrayLat = dedGiven(arrayWithDuplicatesLatter);
console.log(deduplicatedArrayLat); // Output: ['a','b','c']

const empty = [];
const emptyArry = empty;
console.log(dedGiven(emptyArry)); // Output: []

const noDuplicated = [12, 13, 14, 15, 16];
const storNoDouplicated = noDuplicated;
console.log(dedGiven(storNoDouplicated)); // Output : [12, 13, 14, 15, 16]

const arryWithStringNumber = [1, "a", "b", 2, "a", 3, 1, "b"];
console.log(dedGiven(arryWithStringNumber)); // Output: [1,"a", "b", 2, 3]
