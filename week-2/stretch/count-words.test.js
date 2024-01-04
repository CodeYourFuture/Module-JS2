const countWords = require('./count-words');

test('should return an object with the words and the number of times each word appears, ignoring spaces and symbols', () => {
  expect(countWords('Hello world!')).toEqual({
    hello: 1,
    world: 1
  });
  expect(countWords('Hello world! Hello world!')).toEqual({
    hello: 2,
    world: 2
  });
})

test('should do the same as before but ordering from the most common word to the least common', () => {
  expect(countWords('Hello world! Beautiful world!')).toEqual({
    world: 2,
    hello: 1,
    beautiful: 1
  });
})