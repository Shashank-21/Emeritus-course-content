function loadContent(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

document.getElementById("about").addEventListener("click", function () {
  loadContent("about.html");
});
