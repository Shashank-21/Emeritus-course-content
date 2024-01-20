In a grocery store, aisle labels are necessary for guiding customers. In this task, you'll use a `for` loop to display the aisle labels.

{Check It!|assessment}(test-3799355638)




|||guidance
```js
function generateAisleLabels(numberOfAisles) {
	let labels = "";

	for(let index = 1; index <= numberOfAisles; index++) {
		let category = getRandomCategory();
		label = "Aisle " + index + ": " + category + "\n";
		labels += label;
	}
	// Don't change this line
	return labels;
}


module.exports = { generateAisleLabels };

```
|||


