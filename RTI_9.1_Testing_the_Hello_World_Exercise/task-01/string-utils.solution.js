function reverse(str) {
  // Reverse the string and return the reversed string.
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

module.exports = { reverse };
