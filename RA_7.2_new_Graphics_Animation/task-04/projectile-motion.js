// this function makes a ball with position and velocity set
const size = 30; // size of ball
const balls = []; //Array to hold all the balls

//This function creates a ball
function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
  ball = document.createElement("div");
  ball.style.backgroundColor = color;
  ball.className = "ball";
  ball.style.height = ball.style.width = size + "px";
  ball.style.top = ycoord + "px";
  ball.style.left = xcoord + "px";
  document.body.appendChild(ball);
  if (!fixed) {
    // only free balls will be updated
    balls.push(ball);
    x.push(xcoord);
    y.push(ycoord);
    velocity_x.push(velx);
    velocity_y.push(vely);
  }
}

const x = []; // position
const y = [];
const stepsize = 20;
let velocity_x = [];
let velocity_y = [];
let gravity = 5;

const rectangleWidth = 840;
const rectangleHeight = 430;

function checkWalls(x, y, velocity_x, velocity_y, i) {
 if (x[i] < 0) {
    x[i] = 0;
    velocity_x[i] = -velocity_x[i];
  } else if (x[i] + size > rectangleWidth) {
    velocity_x[i] = -velocity_x[i];
    x[i] = rectangleWidth - size;
  }
  if (y[i] + size > rectangleHeight) {
    velocity_y[i] = -velocity_y[i];
    y[i] = rectangleHeight - size;
  } else if (y[i] < 0) {
    y[i] = 0;
    velocity_y[i] = -velocity_y[i];
  }
}

function update() {
  for (let i = 0; i < balls.length; i++) {
    x[i] += velocity_x[i];
    // Add the value of 'gravity' to the 'velocity_y' to siumlate gravity

    y[i]+= velocity_y[i];
    checkWalls(x, y, velocity_x, velocity_y, i);
    balls[i].style.left = x[i] + "px";
    balls[i].style.top = y[i] + "px";
  }
}
setInterval(update, 100); // this calls update ever 1/10 second

function getRandom(scale) {
  return Math.floor(Math.random() * 2 * scale - scale);
}
function factory(total) {
   for (let i = 0; i < total; i++) {
    let velx = getRandom(stepsize);
    let vely = getRandom(stepsize);
    makeBall(400 - size / 2, 200 - size / 2, "blue", velx, vely, 0);
    makeBall(400 - size / 2, 200 - size / 2, "red", -velx, -vely, 0);
  }
}

factory(100); //Generate 100 blue balls

if (typeof module !== "undefined") {
  module.exports = { balls, gravity, velocity_x, velocity_y, update, x, y };
}
