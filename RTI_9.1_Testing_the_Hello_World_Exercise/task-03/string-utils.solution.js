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

module.exports = { capitalizeWords };
