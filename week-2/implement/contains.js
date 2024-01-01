function contains(obj, propertyName) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        throw new Error('Invalid input: The first parameter must be an object');
      }
    // Check if the object has the specified property
    return obj.hasOwnProperty(propertyName);
    
}
//uses the hasOwnProperty method to check if the object contains the specified property
console.log(contains({ a: 1, b: 2 }, 'a')); // should return true
console.log(contains({ a: 1, b: 2 }, 'c')); // should return false
console.log(contains({}, 'a')); // should return false
console.log(contains({ a: 1, b: 2 }, 'b')); // should return true
module.exports = contains;
