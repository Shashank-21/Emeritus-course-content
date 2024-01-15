function reverse(str) {
  // Reverse the string and return the reversed string.
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

function isPalindrome(str) {
  // A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'nurses run'.
  // Check if the string is a palindrome and return true if it is or false if it isn't
  const reversedStr = reverse(str);
  return str === reversedStr;
}

function capitalizeWords(str) {
  // Capitalize the first letter of each word in the string and return the capitalized string.

  const words = str.split(" ");
  let capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word[0].toUpperCase() + word.substring(1);
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(" ");
}

function toTitleCase(str) {
  // Title case is where the first letter of each word is capitalized apart from some words such as 'the', 'of', 'a', etc.
  // The first letter of the first word should always be capitalized.
  // The list of words to ignore can be found in the 'nonCapitalizedWords' array.

  const words = str.split(" ");
  let titleCasedWords = [];
  const nonCapitalizedWords = [
    "the",
    "of",
    "a",
    "and",
    "an",
    "or",
    "nor",
    "but",
    "is",
    "if",
    "then",
    "else",
    "when",
    "at",
    "from",
    "by",
    "on",
    "off",
    "for",
    "in",
    "out",
    "over",
    "to",
  ];

  // Convert the string to the title case and return the converted string.

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (i === 0 || !nonCapitalizedWords.includes(word)) {
      word = word[0].toUpperCase() + word.substring(1);
    }
    titleCasedWords.push(word);
  }
  return titleCasedWords.join(" ");
}

module.exports = { reverse, isPalindrome, toTitleCase, capitalizeWords };
