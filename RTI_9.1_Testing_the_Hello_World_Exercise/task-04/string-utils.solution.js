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

module.exports = { toTitleCase };
