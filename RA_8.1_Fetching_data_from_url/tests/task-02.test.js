const jsdom = require("jsdom");
const path = require("path");
const { JSDOM } = jsdom;
const renderCatFacts = require(path.resolve(
  __dirname,
  "../task-02/task-02.js"
));

describe("renderCatFacts", () => {
  let dom;
  let container;

  beforeEach(() => {
    dom = new JSDOM(
      `<!DOCTYPE html><html><body><div id="container"></div></body></html>`
    );
    global.document = dom.window.document;
    container = document.getElementById("container");
  });

  test("should create and append the correct number of cat fact cards to the container", () => {
    const mockFacts = [{ text: "Fact 1" }, { text: "Fact 2" }];

    renderCatFacts(mockFacts, container);

    const cards = container.getElementsByClassName("card");
    try {
      expect(cards.length).toBe(mockFacts.length);
    } catch (error) {
      throw new Error(
        `Expected ${mockFacts.length} facts to be rendered. Got ${cards.length} facts instead`
      );
    }
  });
  test("should create and append correct cat fact cards to the container", () => {
    const mockFacts = [{ text: "Fact 1" }, { text: "Fact 2" }];

    renderCatFacts(mockFacts, container);

    const cards = container.getElementsByClassName("card");
    try {
      expect(cards[0]?.textContent).toBe("Fact 1");
    } catch (error) {
      throw new Error(
        `Expected text content in first card to be "Fact 1". Got ${
          cards[1]?.textContent || "undefined"
        }  instead`
      );
    }
    try {
      expect(cards[1].textContent).toBe("Fact 2");
    } catch (error) {
      throw new Error(
        `Expected text content in second card to be "Fact 2". Got ${
          cards[1].textContent || "undefined"
        } instead`
      );
    }
  });
});
