const greetButton = document.getElementById("greetButton");

function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greetingDisplay = document.getElementById("greetingDisplay");
  if (name !== "") {
    const greeting = document.createElement("h1");
    // If the `name` variable is not an empty string, The 'h1' element should contain the message 'Hello, <name>!'.
    // For instance if the name is 'Steve', the greeting should display "Hello, Steve!".

    greetingDisplay.innerHTML = "";
    greetingDisplay.appendChild(greeting);
  } else {
    const greeting = document.createElement("p");
    // Else, the 'p' element should contain the message `Please enter your name`.

    greetingDisplay.innerHTML = "";
    greetingDisplay.appendChild(greeting);
  }
}

greetButton.addEventListener("click", greetUser);
