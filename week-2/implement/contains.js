function contains(obj, str) {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  return obj.hasOwnProperty(str);
}

module.exports = contains;
