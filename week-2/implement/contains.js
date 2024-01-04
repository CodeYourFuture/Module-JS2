function contains(object, key) {
  return !object ? false : object.hasOwnProperty(key);
}

module.exports = contains;
