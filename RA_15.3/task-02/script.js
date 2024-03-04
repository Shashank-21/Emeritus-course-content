function loadContent(page) {
  return fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

document.getElementById("about").addEventListener("click", function () {
  loadContent("about.html");
});

document.getElementById("services").addEventListener("click", function () {
  //  Todo: Call the `loadContent` function to load the contents of `services.html` file
});
