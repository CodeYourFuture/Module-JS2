function contains(object, key) {
    if (isNaN(object[key]) || object[key] === 0) {
      return false;
    }
  return object.hasOwnProperty(key);
}


module.exports = contains;
