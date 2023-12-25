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
      resources: "usable",
      beforeParse(window) {
        window.fetch = () => Promise.resolve(); // Mock fetch if needed
      },
      pretendToBeVisual: true,
    });

    document = dom.window.document;

    // Load your JavaScript file
    const scriptContent = fs.readFileSync(
      path.resolve(__dirname, "app.js"),
      "utf8"
    );
    const scriptEl = document.createElement("script");
    scriptEl.textContent = scriptContent;
    document.body.appendChild(scriptEl);

    // Wait for the scripts to be evaluated
    await new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", resolve);
    });
  });

  it("should log activity when button is clicked", () => {
    const logActivityButton = document.querySelector("#log-activity");
    logActivityButton.click();

    const items = document.querySelectorAll("#activities-container p");
    expect(items.length).toBeGreaterThan(0);
  });

  it("Should display meal info when meal is selected", () => {
    const selectElement = document.querySelector("#meal-options");
    selectElement.value = "Avocado Toast";
    selectElement.dispatchEvent(new dom.window.Event("change"));

    const items = document.querySelectorAll("#selected-meal-info p");
    expect(items.length).toBeGreaterThan(0);
  });

  it("should set and display goal when button is clicked", () => {
    const setGoalButton = document.querySelector("#set-goal");
    setGoalButton.click();

    const items = document.querySelectorAll("#goals-container p");
    expect(items.length).toBeGreaterThan(0);
  });
});
