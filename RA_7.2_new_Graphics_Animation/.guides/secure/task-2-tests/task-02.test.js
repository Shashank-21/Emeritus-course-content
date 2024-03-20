const fs = require("fs");
const path = require("path");

const taskDirectory = path.resolve(__dirname,'../../../task-02');

const htmlPath = path.resolve(taskDirectory, "index.html");
const cssPath = path.resolve(taskDirectory, "styles.css");

const jsPath = path.resolve(taskDirectory, "factor-velocity.js");

let htmlContent, velocity_x, velocity_y, balls, update, x, y;

describe("Velocity is factored in", () => {
  beforeAll(() => {
    const cssContent = fs.readFileSync(cssPath, "utf-8");
    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = fs.readFileSync(htmlPath, "utf-8");
    htmlContent = htmlContent.replace("<head>", `<head>${styleTag}`);

    document.body.innerHTML = htmlContent;

    const script = require(jsPath);
    velocity_y = script.velocity_y;
    velocity_x = script.velocity_x;
    balls = script.balls;
    update = script.update;
    x = script.x;
    y = script.y;
  });

  test("Update function updates the x and y coordinates according to velocity", () => {
    const initialX = [...x];
    const initialY = [...y];
    update();
    try {
      expect(x).toEqual(initialX.map((x_c, i) => x_c + velocity_x[i]));
    } catch (error) {
      throw new Error(
        "Are you updating the value of x[i] by adding the value of velocity_x[i] to it? \n x[i] += velocity_x[i]"
      );
    }
    try {
      expect(y).toEqual(initialY.map((y_c, i) => y_c + velocity_y[i]));
    } catch (error) {
      throw new Error(
        "Are you updating the value of y[i] by adding the value of velocity_y[i] to it? \n y[i] += velocity_y[i]"
      );
    }
  });
});
