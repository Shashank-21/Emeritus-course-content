const greetButton = document.getElementById("greetButton");

function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greetingDisplay = document.getElementById("greetingDisplay");

  // If the `name` variable holds an empty string, create a 'p' element and display the message 'Please enter your name'.
  // Else, create a h1 element and display the greeting `Hello, [name]!`. Don't forget to append the element as a child to the greetingDisplay element.
  // Your code here
  if (name !== "") {
    const greeting = document.createElement("h1");
    greeting.textContent = `Hello, ${name}!`;
    greetingDisplay.innerHTML = "";
    greetingDisplay.appendChild(greeting);
  } else {
    const greeting = document.createElement("p");
    greeting.textContent = "Please enter your name";
    greetingDisplay.innerHTML = "";
    greetingDisplay.appendChild(greeting);
  }
}

greetButton.addEventListener("click", greetUser);
