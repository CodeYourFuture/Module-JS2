const totalTill = require('./till');

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

test('should returns the total amount in pounds', () => {
  const till1 = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };
  const till2 = {
    "1p": 10,
    "5p": 5,
    "50p": 4,
    "20p": 10,
    "10p": 10,
  };

  expect(totalTill(till1)).toBe('£4.40');
  expect(totalTill(till2)).toBe('£5.35');
});