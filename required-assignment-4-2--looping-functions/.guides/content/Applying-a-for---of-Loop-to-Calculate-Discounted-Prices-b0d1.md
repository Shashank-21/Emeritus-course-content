The next task is to calculate discounts for the grocery store’s promotions. This task involves using a `for...of` loop to iterate over a list of product prices and apply a discount rate.

{Check It!|assessment}(test-2949122052)

|||guidance
```js
function calculateDiscountedPrices(productPrices, discountRate) {
	let discountedPrices = [];

	for(const price of productPrices) {
		const discountedPrice = price - (price * discountRate);
		discountedPrices.push(discountedPrice);
	}

	return discountedPrices;
}

module.exports = { calculateDiscountedPrices };
```
|||