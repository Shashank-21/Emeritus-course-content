// Todo: Add an event listener to the `window` object that listens to the `hashchange` event and calls the `updateContent` function

function updateContent() {
  const currentHash = window.location.hash.replace("#", "");

  document.querySelectorAll(".content > div").forEach((div) => {
    div.textContent = "";
    div.classList.remove("current-section");
  });

  if (currentHash) {
    const locationDiv = document.getElementById(`${currentHash}-location`);
    if (locationDiv) {
      locationDiv.textContent = `You're currently in the ${currentHash} section.`;
      locationDiv.classList.add("current-section");
    }
  }
}

window.dispatchEvent(new Event("hashchange"));
