document.addEventListener("DOMContentLoaded", async () => {
  async function loadContent() {
    const page = location.hash.replace("#", "");
    if (page) {
      try {
        // Todo: Use fetch to retrieve the page content and assign it to a variable

        // Todo: Extract the text from the response and assign it to a variable

        document.getElementById("content").innerHTML = data;
      } catch (error) {
        console.error("Failed to load page: ", error);
      }
    }
  }

  window.addEventListener("hashchange", loadContent);
  loadContent();
});
