function calculateDiscountedPrices(productPrices, discountRate) {
  let discountedPrices = [];

  for (const price of productPrices) {
    //Todo: Calculate the value of `discountedPrice` by using the formula `price - price * discountRate`.
    let discountedPrice = price - price * discountRate;
    discountedPrices.push(discountedPrice);
  }

  return discountedPrices;
}

module.exports = { calculateDiscountedPrices };
