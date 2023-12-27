const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");

describe("Greeting functionality", () => {
  let dom;
  let document;

  beforeAll(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    global.document = document;
    global.window = document.defaultView;

    // Load and execute script.js in JSDOM environment
    const script = fs.readFileSync(
      path.resolve(__dirname, "script.js"),
      "utf-8"
    );
    const scriptEl = document.createElement("script");
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);
  });

  test("displays a greeting when a name is entered", () => {
    const greetButton = document.getElementById("greetButton");
    const nameInput = document.getElementById("nameInput");
    const greetingDisplay = document.getElementById("greetingDisplay");

    nameInput.value = "John";
    greetButton.click();
    try {
      expect(greetingDisplay.firstChild.tagName).toBe("H1");
    } catch (error) {
      throw new Error("Did you append a h1 element when the name is entered?");
    }
    try {
      expect(greetingDisplay.firstChild.textContent).toBe("Hello, John!");
    } catch (error) {
      throw new Error(
        `For the name ${nameInput.value}, the expected greeting is "Hello, ${nameInput.value}!". But the greeting received is ${greetingDisplay.firstChild.textContent}`
      );
    }
  });

  test("asks for a name when input is empty", () => {
    const greetButton = document.getElementById("greetButton");
    const nameInput = document.getElementById("nameInput");
    const greetingDisplay = document.getElementById("greetingDisplay");

    nameInput.value = "";
    greetButton.click();

    try {
      expect(greetingDisplay.firstChild.tagName).toBe("P");
    } catch (error) {
      throw new Error(
        "Did you append a p element when the name is not entered?"
      );
    }
    try {
      expect(greetingDisplay.firstChild.textContent).toBe(
        "Please enter your name"
      );
    } catch (error) {
      throw new Error(
        `For a blank name, the expected greeting is "Please enter your name". But the greeting received is ${greetingDisplay.firstChild.textContent}`
      );
    }
  });
});
