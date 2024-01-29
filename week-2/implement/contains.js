function contains(obj, prop) {
  for (const key of Object.keys(obj)) {
    if (key === prop) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = contains;
