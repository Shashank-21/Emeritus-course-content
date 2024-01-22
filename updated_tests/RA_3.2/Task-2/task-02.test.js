const fs = require("fs");
const cheerio = require("cheerio");
const errors = [];

const filePath = `/home/codio/workspace/task-02/index.html`;

if (!fs.existsSync(filePath)) {
  errors.push("index.html doesn't exist");
} else {
  var $ = cheerio.load(fs.readFileSync(filePath));

  if ($("script").length <= 0) {
    errors.push("There is no script in the page");
  } else {
    const scriptContent = $("script")
      .html()
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => !!item);
    const regexA = /a\s*=\s*1/;
    const a = scriptContent.find((item) => regexA.test(item));
    const regexB = /b\s*=\s*2/;
    const b = scriptContent.find((item) => regexB.test(item));
    const alerts = scriptContent.filter((item) => item.includes("alert"));
    console.log(alerts);
    if (!a) {
      errors.push("The variable a hasn't been defined");
    }
    if (!b) {
      errors.push("The variable b hasn't been defined");
    }
    if (alerts.length !== 2) {
      errors.push(
        "There must be exactly 2 alerts, one that announces the value of a and the other that contains the value of b"
      );
    }
  }
}

if (errors.length <= 0) {
  process.stdout.write("Well done!");
  process.exit(0);
} else {
  process.stdout.write(errors.join("\n"));
  process.exit(1);
}
