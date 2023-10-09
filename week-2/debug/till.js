function totalTill(till) {
  let total = 0;
  for (const [coin, quantity] of Object.entries(till)) {
    console.log(coin * quantity);
    total += coin * quantity;
  }

  return `£${total / 100}`;
}

console.log(
  totalTill({
    "1p": 10,
    "5p": 6,
    "50p": 4,
    "20p": 10,
  })
);
