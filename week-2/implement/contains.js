function contains(object, key) {
    if (isNaN(object[key]) || object[key] === 0) {
      return false;
    }
  return object.hasOwnProperty(key);
}
console.log(contains({ a: 1, b: 2 }, "a")); 
console.log(contains({ a: 1, b: 2 }, ""));
console.log(contains({ a: 1, b: 2 }, ["aisha", "zainab"]));



module.exports = contains;
