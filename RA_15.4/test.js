const fs = require("fs");
const cheerio = require("cheerio");
const assert = require("assert");

const htmlContent = fs.readFileSync("index.html", "utf8");
const $ = cheerio.load(htmlContent);

let errors = [];

function assertHref(selector, expectedHref, message) {
  const actualHref = $(selector).attr("href");
  try {
    assert.strictEqual(actualHref, expectedHref, message);
  } catch (error) {
    errors.push(error.message);
  }
}

assertHref("#homeBtn", "#home", "The href for the Home button is incorrect");
assertHref("#aboutBtn", "#about", "The href for the About button is incorrect");
assertHref(
  "#contactBtn",
  "#contact",
  "The href for the Contact button is incorrect"
);

if (errors.length > 0) {
  console.error("Errors found:\n" + errors.join("\n"));
  process.exit(1);
} else {
  console.log("Great job");
  process.exit(0);
}
