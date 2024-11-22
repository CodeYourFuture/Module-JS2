const totalTill = require('./till.js'); // Import the function for testing

describe('totalTill', () => {
  test('calculates the total amount in pounds from the till object', () => {
    const till = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };

    const result = totalTill(till);
    expect(result).toBe('£4.40');
  });

  test('returns £0.00 if the till is empty', () => {
    const till = {};
    const result = totalTill(till);
    expect(result).toBe('£0.00');
  });

  test('calculates the correct amount when all coins are 1p', () => {
    const till = {
      "1p": 100,
    };
    const result = totalTill(till);
    expect(result).toBe('£1.00');
  });

  test('calculates the correct amount with mixed coins', () => {
    const till = {
      "1p": 5,
      "5p": 5,
      "20p": 5,
    };
    const result = totalTill(till);
    expect(result).toBe('£1.30');
  });

  test('calculates the correct amount with larger coin values', () => {
    const till = { 
      "10p": 10,
      "50p": 2,
    };
    const result = totalTill(till);
    expect(result).toBe('£2.00');
  });
});