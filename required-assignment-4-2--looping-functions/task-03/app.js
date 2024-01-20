document.addEventListener('DOMContentLoaded', function() {
	const submitButton = document.getElementById('submitCodeButton');
	const codeInput = document.getElementById('discountCodeInput');
	const resultDiv = document.getElementById('result');
	const availableCodes = ["DISCOUNT20", "SALE15", "OFFER10"];

	submitButton.addEventListener('click', function() {
		if(resultDiv.innerHTML) {
			resultDiv.innerHTML = ""
		}
		const enteredCode = codeInput.value;
		const {
			resultString,
			compareString
		} = checkCodeValidity(enteredCode, availableCodes);
		if(compareString) {
			resultDiv.innerHTML += compareString
				.split('\n').map(line => {
					return `<p>${line}</p>`;
				})
				.join('<br>');
		}
		if(resultString) {
			resultDiv.innerHTML += `<p style="color: ${
      resultString === 'Coupon not found' ? 'red' : 'green'
      };">${resultString}</p>`;
		}
	});
});