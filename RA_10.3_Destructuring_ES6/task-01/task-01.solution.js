const colors = ["red", "green", "blue", "yellow"];

// Todo: Destructure the first two colors from the colors array.
// Store the first color in the `primaryColor` variable and the second color in the `secondaryColor` variable.
const [primaryColor, secondaryColor] = colors;

// Log the variables to the console. Uncomment the next two lines once the task is done.
console.log("Primary Color:", primaryColor);
console.log("Secondary Color:", secondaryColor);

// Dont change this line
module.exports = { colors, primaryColor, secondaryColor };
