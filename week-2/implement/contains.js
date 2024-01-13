function contains(obj, property) {
  if (
    typeof obj === "object" &&
    !Array.isArray(obj) &&
    obj.hasOwnProperty(property)
  ) {
    return true;
  } else {
    return false;
  }
}
const obj = ["a", "b", "c"];
console.log(typeof obj);
module.exports = contains;
