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

document.getElementById("services").addEventListener("click", function () {
  loadContent("services.html");
});

document.getElementById("contact").addEventListener("click", function () {
  loadContent("contact.html");
});
