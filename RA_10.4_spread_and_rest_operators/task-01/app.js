const appetizers = [
  "Bruschetta",
  "Caprese Salad",
  "Shrimp Cocktail",
  "Stuffed Mushrooms",
  "Garlic Bread",
  "Nachos",
  "Onion Rings",
  "Deviled Eggs",
  "Spring Rolls",
  "Chicken Wings",
];
const mainCourses = [
  "Grilled Steak",
  "Spaghetti Carbonara",
  "Vegetable Stir Fry",
  "Chicken Parmesan",
  "Seafood Paella",
  "Margherita Pizza",
  "Lamb Chops",
  "Sushi Platter",
  "Beef Stroganoff",
  "Tofu Curry",
];

let selectedAppetizers = [];
let selectedMainCourses = [];

document.getElementById("appetizersBtn").addEventListener("click", function () {
  selectedAppetizers = generateRandomDishes(appetizers);
  displayDishes("appetizersDisplay", "Appetizers", selectedAppetizers);
});

document.getElementById("mainCourseBtn").addEventListener("click", function () {
  selectedMainCourses = generateRandomDishes(mainCourses);
  displayDishes("mainCourseDisplay", "Main Courses", selectedMainCourses);
});

document.getElementById("combineBtn").addEventListener("click", function () {
  const combinedDishes = combineDishes(selectedAppetizers, selectedMainCourses);
  displayDishes("combinedDisplay", "Combined Dishes", combinedDishes);
});

function generateRandomDishes(dishes) {
  const shuffled = dishes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

function displayDishes(elementId, headingText, dishes) {
  const element = document.getElementById(elementId);
  element.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = headingText;
  element.appendChild(heading);

  const dishList = document.createElement("p");
  dishList.textContent = dishes.join(", ");
  element.appendChild(dishList);
}
