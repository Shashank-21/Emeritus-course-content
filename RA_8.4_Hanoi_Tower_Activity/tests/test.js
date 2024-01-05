const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function runTest() {
  let options = new chrome.Options();
  options.addArguments("--headless");
  options.addArguments("--no-sandbox");

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    // Replace this try block with your test code.
    await driver.get(`${__dirname}/index.html`); // Replace with your URL
    await driver.manage().setTimeouts({ implicit: 1000 });
    let elm = await driver.findElement(By.id("numDisk"));
    if (!elm) {
      throw new Error("Element not found");
    }
  } finally {
    await driver.quit();
  }
}

runTest().catch(console.error);
