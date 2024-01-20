document.addEventListener('DOMContentLoaded', function() {
	const generateButton = document.getElementById('generateButton');
	generateButton.addEventListener('click', function() {
		const numberOfAisles = document.getElementById('aisleNumberInput').value;
		const labels = generateAisleLabels(numberOfAisles).split(`\n`);
		const labelsContainer = document.getElementById('aisle-labels');
		labelsContainer.innerHTML = ''; // Clear existing labels
		labels.forEach(label => {
			if(label) {
				const labelElement = document.createElement('div');
				labelElement.classList.add('aisle-label');
				labelElement.textContent = label;
				labelsContainer.appendChild(labelElement);
      }
		});
	});
});