const fs = require("fs");
const path = require("path");

const taskDirectory = path.resolve(__dirname,'../../../task-03');

const htmlPath = path.resolve(taskDirectory, "index.html");
const cssPath = path.resolve(taskDirectory, "styles.css");

const jsPath = path.resolve(taskDirectory, "check-walls.js");

let htmlContent, velocity_x, velocity_y, balls, update, x, y, checkWalls, rectangleWidth, rectangleHeight, size;

describe("Limit movement within the walls", () => {
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
    x = script.x;
    y = script.y;
    checkWalls = script.checkWalls;
    rectangleWidth = script.rectangleWidth;
    rectangleHeight = script.rectangleHeight;
    size = script.size;
  });

  test("checkWalls function updates the x_coordinate to 0 when the ball goes beyond the left wall", () => {
    x = x.map((x) => Math.floor(Math.random() * -5));
    velocity_x = velocity_x.map((velX) => -10);
    const initialVelocityX = [...velocity_x];
    const initialX = [...x];
    x.forEach((xC, i) => {
      checkWalls(x, y, velocity_x, velocity_y, i);
    });
    try {
      expect(x).toEqual(initialX.map((xInit) => 0));
    } catch (error) {
      throw new Error(
        "Are you updating the value of x[i] to 0 when it is less than 0?"
      );
    }
    try {
      expect(velocity_x).toEqual(initialVelocityX.map((velXInit) => -velXInit));
    } catch (error) {
      throw new Error(
        "Are you reversing the value of velocity_x[i] when x[i] <0?"
      );
    }
  });

  test("checkWalls function updates the x_coordinate to rectangleWidth - size when the ball goes beyond the left wall", () => {
    x = x.map((x) => Math.floor(Math.random() * 5) + rectangleWidth);
    velocity_x = velocity_x.map((velX) => 10);
    const initialVelocityX = [...velocity_x];
    const initialX = [...x];
    x.forEach((xC, i) => {
      checkWalls(x, y, velocity_x, velocity_y, i);
    });
    try {
      expect(x).toEqual(initialX.map((xInit) => rectangleWidth - size));
    } catch (error) {
      throw new Error(
        "Are you updating the value of x[i] to rectangleWidth - size when it is greater than rectangleWidth - size?"
      );
    }
    try {
      expect(velocity_x).toEqual(initialVelocityX.map((velXInit) => -velXInit));
    } catch (error) {
      throw new Error(
        "Are you reversing the value of velocity_x[i] when x[i] + rectangleWidth > size?"
      );
    }
  });

  test("checkWalls function updates the y_coordinate to 0 when the ball goes beyond the top wall", () => {
    y = y.map((x) => Math.floor(Math.random() * -5));
    velocity_y = velocity_y.map((velY) => -10);
    const initialVelocityY = [...velocity_y];
    const initialY = [...y];
    y.forEach((yC, i) => {
      checkWalls(x, y, velocity_x, velocity_y, i);
    });
    try {
      expect(y).toEqual(initialY.map((xInit) => 0));
    } catch (error) {
      throw new Error(
        "Are you updating the value of y[i] to 0 when it is less than 0?"
      );
    }
    try {
      expect(velocity_y).toEqual(initialVelocityY.map((velYInit) => -velYInit));
    } catch (error) {
      throw new Error(
        "Are you reversing the value of velocity_y[i] when y[i] <0?"
      );
    }
  });

  test("checkWalls function updates the y_coordinate to rectangleHeight - size when the ball goes beyond the bottom wall", () => {
    y = y.map((y) => Math.floor(Math.random() * 5) + rectangleHeight);
    velocity_y = velocity_y.map((velY) => 10);
    const initialVelocityY = [...velocity_y];
    const initialY = [...y];
    y.forEach((yC, i) => {
      checkWalls(x, y, velocity_x, velocity_y, i);
    });
    try {
      expect(y).toEqual(initialY.map((yInit) => rectangleHeight - size));
    } catch (error) {
      throw new Error(
        "Are you updating the value of y[i] to rectangleHeight - size when it is greater than rectangleHeight - size?"
      );
    }
    try {
      expect(velocity_y).toEqual(initialVelocityY.map((velYInit) => -velYInit));
    } catch (error) {
      throw new Error(
        "Are you reversing the value of velocity_y[i] when y[i] + rectangleHeight > size?"
      );
    }
  });
});
