const invert = require('./invert');

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
test('should return an object with keys and values swapped ', () => {
  expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ '1': 'a', '2': 'b', '3': 'c' })
})