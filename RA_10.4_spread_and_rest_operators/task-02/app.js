function generateRandomNumbers() {
  return Array.from(
    { length: Math.floor(Math.random() * 5) + 2 },
    () => Math.floor(Math.random() * 10) + 1
  );
}

function displayNumbers(numbers) {
  document.getElementById("numbers").textContent = `Numbers: ${numbers.join(
    ", "
  )}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const randomNumbers = generateRandomNumbers();
  displayNumbers(randomNumbers);
});

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const numbersText = document.getElementById("numbers").textContent;
    const numbers = numbersText
      .replace("Numbers: ", "")
      .split(", ")
      .map(Number);
    const sum = sumAll(...numbers);

    document.getElementById("sum").textContent = `Sum: ${sum}`;
  });
