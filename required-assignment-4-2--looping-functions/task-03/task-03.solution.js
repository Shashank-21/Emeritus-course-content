function checkCodeValidity(enteredCode, availableCodes) {
  let index = 0;
  let resultString = "";
  let compareString = "";
  let isFound = false;

  do {
    compareString += "Checking against " + availableCodes[index] + "...\n";
    if (enteredCode === availableCodes[index]) {
      // Todo: Assign the value 'Coupon found!' to the `resultString` variable.
      resultString = "Coupon found!";
      // Todo: Assign the value true to the `isFound` variable
      isFound = true;
    }
    index++;
  } while (index < availableCodes.length && !isFound);

  if (!isFound) {
    // Todo: Assign the value 'Coupon not found' to the `resultString` variable.
    resultString = "Coupon not found";
  }

  // Don't change this line
  return {
    resultString,
    compareString,
  };
}

module.exports = { checkCodeValidity };
