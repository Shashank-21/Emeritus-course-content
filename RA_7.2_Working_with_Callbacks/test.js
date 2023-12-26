const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

describe("Event listeners", () => {
  let dom;
  let document;

  beforeAll(async () => {
    const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

    dom = new JSDOM(html, {
      runScripts: "dangerously",
    });

    document = dom.window.document;

    // Load your JavaScript file
    const dataContent = fs.readFileSync(
      path.resolve(__dirname, "initial-data.js"),
      "utf8"
    );
    const helperContent = fs.readFileSync(
      path.resolve(__dirname, "helper-functions.js"),
      "utf8"
    );
    const eventListenerContent = fs.readFileSync(
      path.resolve(__dirname, "event-listeners.js"),
      "utf8"
    );
    const scripts = [dataContent, helperContent, eventListenerContent];
    scripts.forEach((scriptContent) => {
      const scriptEl = document.createElement("script");
      scriptEl.textContent = scriptContent;
      document.body.appendChild(scriptEl);
    });

    // Wait for the scripts to be evaluated
    await new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", resolve);
    });
  });

  test("should log activity when button is clicked", () => {
    const logActivityButton = document.querySelector("#log-activity");
    logActivityButton.click();

    const items = document.querySelectorAll("#activities-container p");
    try {
      expect(items.length).toBeGreaterThan(0);
    } catch (error) {
      throw new Error(
        "Did you add the correct callback function to the 'logActivityButton' element? It is the 'logActivityClick' function"
      );
    }
  });

  test("Should display meal info when meal is selected", () => {
    const selectElement = document.querySelector("#meal-options");
    selectElement.value = "Avocado Toast";
    selectElement.dispatchEvent(new dom.window.Event("change"));

    const items = document.querySelectorAll("#selected-meal-info p");
    try {
      expect(items.length).toBeGreaterThan(0);
    } catch (error) {
      throw new Error(
        "Did you add the correct callback function to the 'mealOptionsSelect' element?"
      );
    }
  });

  test("should set and display goal when button is clicked", () => {
    const setGoalButton = document.querySelector("#set-goal");
    setGoalButton.click();

    const items = document.querySelectorAll("#goals-container p");
    try {
      expect(items.length).toBeGreaterThan(0);
    } catch (error) {
      throw new Error(
        "Did you add the correct callback function to the 'setGoalButton' element?"
      );
    }
  });
});
