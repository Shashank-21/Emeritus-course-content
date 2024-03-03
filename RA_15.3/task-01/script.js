function loadContent(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

document.getElementById("about").addEventListener("click", function () {
  //  Todo: Call the `loadContent` function to load the contents of `about.html` file
});
