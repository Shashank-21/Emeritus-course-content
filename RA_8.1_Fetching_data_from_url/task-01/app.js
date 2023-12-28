document.addEventListener("DOMContentLoaded", () => {
  const dataContainer = document.getElementById("dataContainer");

  fetchCatFacts()
    .then((data) => {
      const formattedData = `<pre>${data}</pre>`;
      dataContainer.innerHTML = formattedData;
    })
    .catch((error) => {
      dataContainer.textContent = `Failed to fetch data: ${error.message}`;
    });
});
