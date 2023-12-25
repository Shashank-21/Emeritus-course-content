function selectMeal() {
  // In this function, the meal name is selected from the dropdown menu through this line of code:
  const mealName = document.getElementById("meal-options").value;

  // From the 'meals' array (which you can find in 'initial-data.js' file),
  // you need to find the object whose 'name' property matches the mealName variable
  // using the array.prototype.find() function.
  // Your code here
  const selectedMeal = meals.find(function (meal) {
    return meal.name === mealName;
  });

  // Then, you need to display the meal info using the 'displayMealInfo' function
  // The 'displayMealInfo' function is defined in the 'helper-functions.js' file.
  // Your code here
  displayMealInfo(selectedMeal);
}

function logActivityClick() {
  // In this function, we have selected one of the fields from the form
  // and stored it in a variable 'activityType'.
  const activityType = document.getElementById("activity-type").value;

  // You need to declare two more variables the same way and store the values
  // from inputs with id 'activity-duration' and 'activity-distance' in them.
  // Your code here
  const activityDuration = document.getElementById("activity-duration").value;
  const activityDistance = document.getElementById("activity-distance").value;

  // Before you log the activity, you need to create an object with the three values
  // that we have stored in the variables above. The object should have the following
  // structure:
  // {
  //   type: "Running", [This is the value from the 'activity-type' input]
  //   duration: 30, [This is the value from the ''activity-duration' input]
  //   distance: 5, [This is the value from the 'activity-distance' input]
  // }
  // Your code here
  const newActivity = {
    type: activityType,
    duration: activityDuration,
    distance: activityDistance,
  };

  // Then, you need to log the activity using the 'logActivity' function
  // The 'logActivity' function is defined in the 'helper-functions.js' file.
  // Your code here
  logActivity(newActivity);
}

function setGoalsClick() {
  // Much like the 'logActivityClick' function, you need to select the inputs with ids
  // 'goal-name', 'goal-target' and 'goal-duration' and store their values in variables
  // Your code here
  const goalName = document.getElementById("goal-name").value;
  const goalTarget = document.getElementById("goal-target").value;
  const goalDuration = document.getElementById("goal-duration").value;

  // Then, you need to create an object with the three values that you have stored
  // in the variables above. The object should have the following structure:
  // {
  //   name: "Running", [This is the value from the 'goal-name' input]
  //   target: 30, [This is the value from the 'goal-target' input]
  //   duration: 5, [This is the value from the 'goal-duration' input]
  // }
  // Your code here
  const newGoal = {
    name: goalName,
    target: goalTarget,
    duration: goalDuration,
  };

  // Then, you need to set the health goal using the 'setHealthGoal' function
  // The 'setHealthGoal' function is defined in the 'helper-functions.js' file.
  // Your code here
  setHealthGoal(newGoal);
}

document.addEventListener("DOMContentLoaded", function () {
  displayMetrics(healthMetrics);

  const selectElement = document.getElementById("meal-options");

  meals.forEach(function (meal) {
    const option = document.createElement("option");

    option.value = meal.name;
    option.textContent = meal.name;

    selectElement.appendChild(option);
  });

  const logActivityButton = document.getElementById("log-activity");

  // Now, add an event listener to the 'logActivityButton' element which
  // listens for a 'click' event and calls the 'logActivityClick' function.
  // Your code here
  logActivityButton.addEventListener("click", logActivityClick);

  const mealOptionsSelect = document.getElementById("meal-options");

  // Now, add an event listener to the 'mealOptionsSelect' element which
  // listens for a 'change' event and calls the 'selectMeal' function.
  // Your code here
  mealOptionsSelect.addEventListener("change", selectMeal);

  const setGoalButton = document.getElementById("set-goal");

  // Finally, add an event listener to the 'setGoalButton' element which
  // listens for a 'click' event and calls the 'setGoalsClick' function.
  // Your code here
  setGoalButton.addEventListener("click", setGoalsClick);
});
