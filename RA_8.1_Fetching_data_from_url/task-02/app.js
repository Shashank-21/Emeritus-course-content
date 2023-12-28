document.addEventListener("DOMContentLoaded", () => {
  const factsContainer = document.getElementById("factsContainer");

  fetchCatFacts()
    .then((data) => {
      const facts = JSON.parse(data);
      renderCatFacts(facts, factsContainer);
    })
    .catch((error) => {
      factsContainer.textContent = `Failed to fetch data: ${error.message}`;
    });
});
