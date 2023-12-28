function renderCatFacts(facts, container) {
  // Loop through the 'facts' array. Each 'fact' is an object containing cat fact details.
  // For each 'fact' in the array:

  facts.forEach((fact) => {
    // 1. Create a new 'div' element and assign it to a variable named 'factDiv'.
    const factDiv = document.createElement("div");

    // 2. Add the class 'card' to 'factDiv' to style it according to the styles.css file.
    factDiv.classList.add("card");

    // 3. Create a 'p' element and assign it to a variable named 'factParagraph'.
    const factParagraph = document.createElement("p");

    // 4. Set the 'textContent' of 'factParagraph' to the 'text' property of the 'fact' object.
    factParagraph.textContent = fact.text;

    // 5. Append 'factParagraph' to 'factDiv'.
    factDiv.appendChild(factParagraph);

    // 6. Append 'factDiv' to the 'container' element.
    // This will render each fact as a card in the container element on the webpage.
    container.appendChild(factDiv);
  });
}

if (typeof module !== "undefined") {
  module.exports = renderCatFacts;
}
