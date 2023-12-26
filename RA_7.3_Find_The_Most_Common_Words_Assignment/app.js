document.addEventListener("DOMContentLoaded", function () {
  const randomParagraph =
    paragraphs[Math.floor(Math.random() * paragraphs.length)];
  document.getElementById("paragraph").textContent = randomParagraph;

  const wordCounts = countWords(randomParagraph);
  const topFiveWords = wordCounts.slice(0, 5);

  const wordCountElement = document.getElementById("wordCount");
  topFiveWords.forEach(([word, count]) => {
    const p = document.createElement("p");
    p.textContent = `${word}: ${count}`;
    wordCountElement.appendChild(p);
  });
});
