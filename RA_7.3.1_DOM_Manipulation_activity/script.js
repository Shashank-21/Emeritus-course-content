const greetButton = document.getElementById("greetButton");

function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greetingDisplay = document.getElementById("greetingDisplay");

  // If the `name` variable holds an empty string, create a 'p' element and display the message 'Please enter your name'.
  // Else, create a h1 element and display the greeting `Hello, [name]!`. Don't forget to append the element as a child to the greetingDisplay element.
  // Your code here
}

greetButton.addEventListener("click", greetUser);
