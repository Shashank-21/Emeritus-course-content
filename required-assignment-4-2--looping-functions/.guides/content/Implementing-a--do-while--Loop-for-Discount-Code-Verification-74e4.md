Customers love discount codes. In this task, you will use a `do-while` loop to check a list of discount codes until it arrives at the correct code.

{Check It!|assessment}(test-4044181456)

|||guidance
```js
function checkCodeValidity(enteredCode, availableCodes) {
	let index = 0;
	let resultString = "";
	let compareString = "";
	let isFound = false;

	do {
		compareString += "Checking against " + availableCodes[index] + "...\n"
    if(enteredCode === availableCodes[index]){
      resultString = "Coupon found!"
      isFound = true;
    }
		index++; 

	} while(index < availableCodes.length && !isFound); 

  if(!isFound){
    resultString = "Coupon not found";
  }

	// Don't change this line
	return {
		resultString,
		compareString
	};
}

module.exports = { checkCodeValidity };
```
|||