// this function makes a ball with position and velocity set
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

//We use this variable to track whether to show random motion or projectile motion
let motionType = "Random";

const x = []; // position
const y = [];
const stepsize = 20;
let velocity_x = [];
let velocity_y = [];
let gravity = 5;
let interval;

const rectangleWidth = 840;
const rectangleHeight = 430;

const p = document.getElementsByTagName("p");
const button = document.getElementById("toggle");

function updateText(motionType) {
  p[0].innerHTML = `Currently simulating: ${motionType} Motion`;
  button.innerHTML = `Switch to: ${
    motionType === "Random" ? "Projectile" : "Random"
  } Motion`;
}
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

function updateRandom() {
  for (let i = 0; i < balls.length; i++) {
    x[i] += getRandom(stepsize);
    y[i] += getRandom(stepsize);
    if (x[i] < 0) {
      x[i] = 0;
    } else if (x[i] > rectangleWidth - size) {
      x[i] = rectangleWidth - size;
    }
    if (y[i] < 0) {
      y[i] = 0;
    } else if (y[i] > rectangleHeight - size) {
      y[i] = rectangleHeight - size;
    }
    balls[i].style.left = x[i] + "px";
    balls[i].style.top = y[i] + "px";
  }
}
function updateProjectile() {
  for (let i = 0; i < balls.length; i++) {
    x[i] += velocity_x[i];
    velocity_y[i] += gravity;
    y[i] += velocity_y[i];
    checkWalls(x, y, velocity_x, velocity_y, i);
    balls[i].style.left = x[i] + "px";
    balls[i].style.top = y[i] + "px";
  }
}

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

function simulate(motionType) {
  if (interval) {
    clearInterval(interval); // this stops the previous simulation
  }
  if (motionType === "Random") {
    interval = setInterval(updateRandom, 100); // this calls update every 1/10 second
  } else {
    interval = setInterval(updateProjectile, 100); // this calls update every 1/10 second
  }
}

function toggleMotion(motionType) {
  if (motionType === "Random") {
    // This means that the current motion is random
    // We need to switch to projectile motion
    // Set 'motionType' to 'Projectile'
  } else {
    // This means that the current motion is projectile
    // We need to switch to random motion
    // Set 'motionType' to 'Random'
  }
  // Once we have changed the motion type, we need to update the text in the p element and the button
  // The p element shows the current motion we're simulating and the button shows the motion we can switch to
  // This is done by the updateText function. All you need to do is call it and pass in the motionType variable
  //  Your code here

  //Finally, we'll need to simulate the motion that we just switched to
  // This is done by the simulate function. All you need to do is call it and pass in the motionType variable
  // Your code here

  // Do not change this line
  return motionType;
}

if (typeof module === "undefined") {
  factory(100); //Generate 100 blue balls
  updateText(motionType);
  simulate(motionType);
  button.addEventListener("click", () => {
    motionType = toggleMotion(motionType);
  });
} else {
  module.exports = { motionType, toggleMotion };
}
