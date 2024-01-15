function reverse(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

function isPalindrome(str) {
  // A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'nurses run'.
  // Check if the string is a palindrome and return true if it is or false if it isn't.
}

module.exports = { isPalindrome };
