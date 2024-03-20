const fs = require("fs");
const path = require("path");

const taskDirectory = path.resolve(__dirname,'../../../task-04');

const htmlPath = path.resolve(taskDirectory, "index.html");
const cssPath = path.resolve(taskDirectory, "styles.css");

const jsPath = path.resolve(taskDirectory, "projectile-motion.js");

let htmlContent, gravity, velocity_x, velocity_y, balls, update, x, y;

describe("Simulate Projectile Motion", () => {
  beforeAll(() => {
    const cssContent = fs.readFileSync(cssPath, "utf-8");
    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = fs.readFileSync(htmlPath, "utf-8");
    htmlContent = htmlContent.replace("<head>", `<head>${styleTag}`);

    document.body.innerHTML = htmlContent;

    const script = require(jsPath);
    gravity = script.gravity;
    velocity_y = script.velocity_y;
    velocity_x = script.velocity_x;
    balls = script.balls;
    update = script.update;
    x = script.x;
    y = script.y;
  });

  test("gravity should be a positive number", () => {
    expect(typeof gravity).toBe("number");
    expect(gravity).toBeGreaterThan(0);
  });

  test("Update function simulates Projectile motion", () => {
    const initialVelocityY = [...velocity_y];
    const initialX = [...x];
    const initialY = [...y];
    update();
    try {
      expect(velocity_y).toEqual(initialVelocityY.map((vel) => vel + gravity));
    } catch (error) {
      throw new Error(
        "Are you sure you are adding gravity to each value of velocity_y?"
      );
    }
  });
});
