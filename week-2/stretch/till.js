function totalTill(till) {
    let total = 0;
  
    for (const [coin, quantity] of Object.entries(till)) {
      // Convert coin to a numeric value (remove "p" and parse as a float)
      const coinValue = parseFloat(coin.replace("p", ""));
      total += coinValue * quantity;
    }
  
    // Format the total as pounds with two decimal places
    return `£${(total / 100).toFixed(2)}`;
  }
  
  // Test the function
  const till = {
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  };
  const totalAmount = totalTill(till);
  
  console.log(totalAmount); // Output should be "£2.94"
  