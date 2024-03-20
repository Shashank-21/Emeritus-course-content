// this function makes a ball with position and velocity set
const size = 30; // size of ball
const balls = []; //Array to hold all the balls

//This function creates a ball
function makeBall(xcoord, ycoord, color, fixed = 0) {
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
  }
}

const x = []; // position
const y = [];

// This line of code decides the step size for every update.
// Change the value of the variable stepSize to change the step size.
// When you're done experimenting, click the 'Next' button.
const stepSize = 5;

function getRandom(step) {
  // return value between +step and -step
  return Math.random() * 2 * step - step;
}
function update() {
  // the wind speed is added to x direction
  for (let i = 0; i < balls.length; i++) {
    x[i] += getRandom(stepSize);
    y[i] += getRandom(stepSize);
    balls[i].style.left = x[i] + "px";
    balls[i].style.top = y[i] + "px";
  }
}

setInterval(update, 100); // this calls update every 1/10th of a second second

function factory(total) {
  for (let i = 0; i < total; i++) {
    makeBall(100, 300, "blue");
    x[i] = 100;
    y[i] = 300;
  }
}

factory(100); //Generate 100 blue balls
makeBall(100, 300, "red", 1); // show how to generate a fixed ball

if (typeof module !== "undefined") {
  module.exports = { stepSize };
}