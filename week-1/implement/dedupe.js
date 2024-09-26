function dedupe(arr) {
  const uniqueArray = [...new Set(arr)];
  return uniqueArray;
}
