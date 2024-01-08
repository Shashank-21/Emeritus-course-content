function generateRandomSortedArray() {
  const length = Math.floor(Math.random() * 20) + 5;
  const array = Array.from({ length }, () => Math.floor(Math.random() * 100));
  return array.sort((a, b) => a - b);
}

function displayArray(array) {
  const arrayDisplay = document.getElementById("arrayDisplay");
  arrayDisplay.innerHTML = "";
  array.forEach((num, index) => {
    const numberElement = document.createElement("div");
    numberElement.classList.add("number");
    numberElement.textContent = num;
    numberElement.dataset.index = index;
    arrayDisplay.appendChild(numberElement);
  });
}

function searchAndDisplay() {
  const num = parseInt(document.getElementById("searchNumber").value);
  const numDivList = document.getElementById("arrayDisplay").children;
  const array = [];
  for (let i = 0; i < numDivList.length; i++) {
    array.push(parseInt(numDivList[i].innerHTML));
  }

  const resultDisplay = document.getElementById("resultDisplay");

  const result = binarySearch(array, num);

  if (result.index !== -1) {
    document
      .querySelector(`[data-index="${result.index}"]`)
      .classList.add("found");
    resultDisplay.textContent = `Number found at index ${result.index}, in ${result.steps} steps.`;
  } else {
    resultDisplay.textContent = `Number not found in ${result.steps} steps.`;
  }
}

document
  .getElementById("generateArray")
  .addEventListener("click", () => displayArray(generateRandomSortedArray()));
document
  .getElementById("searchButton")
  .addEventListener("click", searchAndDisplay);

window.onload = () => displayArray(generateRandomSortedArray());
