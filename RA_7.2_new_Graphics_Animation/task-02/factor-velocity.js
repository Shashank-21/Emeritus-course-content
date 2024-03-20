const size = 30; // size of ball
const balls = []; //Array to hold all the balls

//This function creates a ball, and adds in velocities in both directions for each aball
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
let gravity = 1;

function update() {
  for (let i = 0; i < balls.length; i++) {
    //Add the value of velocity_x to x to update x coordinate for the ith element

    // Add the value of velocity_y to y to update the y coordinate for the ith element

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
  module.exports = { balls, velocity_x, velocity_y, update, x, y };
}
