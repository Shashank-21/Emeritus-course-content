const fs = require("fs");
const path = require("path");

const taskDirectory = path.resolve(__dirname,'../../../task-05');

const htmlPath = path.resolve(taskDirectory, "index.html");
const cssPath = path.resolve(taskDirectory, "styles.css");

const jsPath = path.resolve(taskDirectory, "random-projectile-switch.js");

let htmlContent, motionType, toggleMotion;

describe("Switch motion", () => {
  beforeAll(() => {
    const cssContent = fs.readFileSync(cssPath, "utf-8");
    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = fs.readFileSync(htmlPath, "utf-8");
    htmlContent = htmlContent.replace("<head>", `<head>${styleTag}`);

    document.body.innerHTML = htmlContent;

    const script = require(jsPath);
    motionType = script.motionType;
    toggleMotion = script.toggleMotion;
  });

  test("Motion type should change when the function 'toggleMotion is called", () => {
    motionType = toggleMotion(motionType);
    try {
      expect(motionType).toBe("Projectile");
    } catch (error) {
      throw new Error(
        "The motion type should be 'Projectile' when it's changed from 'Random'"
      );
    }
    motionType = toggleMotion(motionType);
    try {
      expect(motionType).toBe("Random");
    } catch (error) {
      throw new Error(
        "The motion type should be 'Random' when it's changed from 'Projectile'"
      );
    }
  });
});
