document.addEventListener('DOMContentLoaded', function() {
	const restockButton = document.getElementById('restockButton');
	const restockInfoContainer = document.getElementById('restocking-info');
	restockButton.addEventListener('click', function() {
		const totalItems = document.getElementById('totalItemsInput').value;
		const itemsPerTrip = document.getElementById('itemsPerTripInput').value;
		restockInfoContainer.innerHTML = '';
		if(totalItems > 0 && itemsPerTrip > 0) {
			const restockInfo = restockShelves(parseInt(totalItems, 10), parseInt(itemsPerTrip, 10));
			restockInfo.forEach(info => {
				const infoElement = document.createElement('div');
				infoElement.textContent = info;
				infoElement.classList.add("restocking-item")
				restockInfoContainer.appendChild(infoElement);
			});
		} else {
			restockInfoContainer.textContent = 'Please enter valid numbers for both fields.';
		}
	});
});