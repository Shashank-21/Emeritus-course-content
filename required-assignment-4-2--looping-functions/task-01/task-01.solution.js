function generateAisleLabels(numberOfAisles) {
  let labels = "";

  for (let index = 1; index <= numberOfAisles; index++) {
    const category = getRandomCategory();

    // Todo: Create a label of the form "Aisle {index}: {category}\n"
    let label = "Aisle " + index + ": " + category + "\n";

    labels += label;
  }

  return labels;
}

// Don't change anything beyond this. Here, we are generating a random category for the 'generateAisleLabels' function
function getRandomCategory() {
  const categories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Beverages",
    "Meat",
    "Seafood",
    "Frozen Foods",
    "Snacks",
    "Cereals",
  ];
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

module.exports = { generateAisleLabels, getRandomCategory };
