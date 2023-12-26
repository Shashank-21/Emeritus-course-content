Welcome to the Health Dashboard assignment! In today's digital age, tracking one's health metrics and activities has become easier and more intuitive. This assignment simulates a basic health dashboard where users can log their activities, set health goals, and select meals to get insights into their nutritional value.

You will find the following files provided:

1. `index.html` - Contains the markup for the health dashboard.
2. `styles.css` - Contains the styling rules for the dashboard's appearance.
3. `initial-data.js` - Contains initial data such as available meals and health metrics.
4. `helper-functions.js` - Contains predefined functions to help you manage and display data.
5. `event-listeners.js` - This is the file you'll be working on. It's meant for you to add the necessary event listeners to make the dashboard interactive.

### Task Instructions:

In the `event-listeners.js` file:

1. Selecting a Meal:

   - Capture the selected meal's name from the dropdown menu.
   - Find the corresponding meal object from the `meals` array in `initial-data.js`.
   - Display the selected meal's info using the `displayMealInfo` function from `helper-functions.js`.

2. Logging an Activity:
   In the `logActivityClick` function, the values from the form fields have been captured. Your task is to:

   - Create an object representing the new activity with the values.
   - Log the new activity using the `logActivity` function from `helper-functions.js`.

3. Setting Health Goals:
   In the `setGoalsClick` function, the values from the form fields have been captured. Your task is to:

   - Create an object representing the new goal with the retrieved values.
   - Set the health goal using the `setHealthGoal` function from `helper-functions.js`.

4. Attaching Event Listeners:
   - Once the DOM is fully loaded, use event listeners to make the dashboard interactive.
   - Attach a click event to the "Log Activity" button to call the `logActivityClick` function.
   - Attach a change event to the meal dropdown to call the `selectMeal` function.
   - Attach a click event to the "Set Goal" button to call the `setGoalsClick` function.

The aim of this assignment is to test your understanding of DOM manipulation, event handling, and JavaScript integration with HTML. It's essential to ensure that each interaction provides the expected feedback to users. Once you have implemented all functionalities, test thoroughly to ensure a smooth user experience. Good luck and happy coding!
