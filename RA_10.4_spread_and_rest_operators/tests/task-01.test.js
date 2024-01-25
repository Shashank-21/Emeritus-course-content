const path = require("path");
const { combineDishes } = require(path.join(
  __dirname,
  "../task-01/task-01.js"
));

describe("sumAll function", () => {
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
  let expectedCombinedDishes, actualCombinedDishes;
  beforeEach(() => {
    selectedAppetizers = appetizers.sort(() => 0.5 - Math.random()).slice(0, 3);
    selectedMainCourses = mainCourses
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    expectedCombinedDishes = [...selectedAppetizers, ...selectedMainCourses];
    actualCombinedDishes = combineDishes(
      selectedAppetizers,
      selectedMainCourses
    );
  });
  test("The task has been attempted", () => {
    try {
      expect(actualCombinedDishes.length).not.toBe(0);
    } catch (error) {
      throw new Error(
        `Have you attempted the task? If yes, please check your code. The function returns an empty array`
      );
    }
  });

  test("combineDishes combines the dishes correctly", () => {
    try {
      expect(expectedCombinedDishes).toEqual(actualCombinedDishes);
    } catch (error) {
      throw new Error(
        `Appetizers: ${JSON.stringify(selectedAppetizers)}\n
        Main Course Items: ${JSON.stringify(selectedMainCourses)}\n
        Expected combined dishes: ${JSON.stringify(expectedCombinedDishes)}\n
        Output of your code: ${JSON.stringify(actualCombinedDishes)}`
      );
    }
  });
});
