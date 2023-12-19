function contains(x, contains) {
    if (
        Object.values(x).includes(contains) ||
        Object.keys(x).includes(contains)
      ) {
        return true;
      }
      return false;
}

module.exports = contains;
