function checkCodeValidity(enteredCode, availableCodes) {
	let index = 0;
	let resultString = "";
	let isFound = false;
	do {
		if(availableCodes[index] === enteredCode) {
			resultString = "Coupon found!";
			isFound = true;
		}
		index++;
	} while(index < availableCodes.length && !isFound);

	if(!isFound) {
		resultString = "Coupon not found";
	}

	return resultString;
}

document.addEventListener("DOMContentLoaded", function() {
	const submitButton = document.getElementById("submitCodeButton");
	const codeInput = document.getElementById("discountCodeInput");
	const resultDiv = document.getElementById("result");
	const pricesContainer = document.getElementById("prices");
	const productPrices = [10.99, 15.99, 20.99, 25.99];
	const productNames = ["Apples", "Bread", "Cheese", "Milk"];

	const availableCodes = {
		DISCOUNT20: 0.2,
		SALE15: 0.15,
		OFFER10: 0.1,
	};

	submitButton.addEventListener("click", function() {
		if(resultDiv.innerHTML) {
			resultDiv.innerHTML = "";
		}
		if(pricesContainer.innerHTML) {
			pricesContainer.innerHTML = "";
		}
		const enteredCode = codeInput.value.toUpperCase();
		const resultString = checkCodeValidity(
			enteredCode,
			Object.keys(availableCodes)
		);

		resultDiv.innerHTML += `<p style="color: ${
      resultString === "Coupon not found" ? "red" : "green"
    };">${resultString}</p>`;

		let discountRate = availableCodes[enteredCode] || 0;
		const discountedPrices = calculateDiscountedPrices(
			productPrices,
			discountRate
		);
		productPrices.forEach((price, index) => {
			const priceElement = document.createElement("p");
			priceElement.className = "price-item";
			priceElement.innerHTML =
				`${productNames[index]}: ` +
				(discountRate > 0 ?
					`<s>$${price.toFixed(2)}</s> <strong>$${
              !!discountedPrices[index]
                ? discountedPrices[index].toFixed(2)
                : price.toFixed(2)
            }</strong>` :
					`$${price.toFixed(2)}`);
			pricesContainer.appendChild(priceElement);
		});
	});
});