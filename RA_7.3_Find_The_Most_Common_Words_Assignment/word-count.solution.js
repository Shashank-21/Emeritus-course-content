function countWords(paragraph) {
  // Remove the periods, commas and convert each word into lowercase in the paragraph.
  const modifiedParagraph = paragraph
    .replaceAll(".", "")
    .replaceAll(",", "")
    .toLowerCase();
  // Using the `split` function, split the paragraph into array of words
  const words = modifiedParagraph.split(" ");

  // Store the word count of each word in an object. The key of the object must be the word and the value must be its count.
  const wordCounts = {};
  words.forEach((word) => {
    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word]++;
    }
  });

  // Convert the object into an array of arrays usint Object.entries;
  const wordCountsArr = Object.entries(wordCounts);

  // Sort the wordCountsArr using the 'array.prototype.sort' function
  wordCountsArr.sort((a, b) => b[1] - a[1]);

  // Return the sorted array
  return wordCountsArr;
}

if (typeof module !== "undefined") {
  module.exports = countWords;
}
