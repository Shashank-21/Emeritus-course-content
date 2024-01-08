function reverse(str) {
  // Reverse the string and return the reversed string.
}

function isPalindrome(str) {
  // A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'nurses run'.
  // Check if the string is a palindrome and return true if it is or false if it isn't.
}

function capitalizeWords(str) {
  // Capitalize the first letter of each word in the string and return the capitalized string.
}

function toTitleCase(str) {
  // Title case is where the first letter of each word is capitalized apart from some words such as 'the', 'of', 'a', etc.
  // The first letter of the first word should always be capitalized.
  // The list of words to ignore can be found in the 'nonCapitalizedWords' array.
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
}

module.exports = { reverse, isPalindrome, toTitleCase, capitalizeWords };
