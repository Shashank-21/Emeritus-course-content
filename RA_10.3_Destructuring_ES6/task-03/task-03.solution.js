const person1 = {
  name: "Alice",
  age: 30,
  profession: "Developer",
};

const person2 = {
  name: "Bob",
  age: 28,
  profession: "Designer",
};

// Destructuring and renaming the 'name' property from person1 and person2
const { name: name1 } = person1;
const { name: name2 } = person2;

// Logging the names
console.log("Name of person 1:", name1);
console.log("Name of person 2:", name2);

// Exporting the variables
module.exports = { person1, person2, name1, name2 };
