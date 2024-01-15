function contains(obj, key) {
  if (typeof obj === "object" && Object.hasOwnProperty.call(obj, key)) {
    return true;
  }
  return false;
}

module.exports = contains;
