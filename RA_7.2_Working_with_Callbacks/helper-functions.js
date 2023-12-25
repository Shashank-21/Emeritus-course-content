function displayMetrics(metrics) {
  const container = document.getElementById("metrics-container");
  container.innerHTML = "";
  metrics.forEach((metric) => {
    const metricElement = document.createElement("p");
    metricElement.textContent = `${metric.metric}: ${metric.value} (Normal: ${metric.normalRange})`;
    container.appendChild(metricElement);
  });
}

function displayActivities(activityList) {
  const container = document.getElementById("activities-container");
  container.innerHTML = "";
  activityList.forEach((activity, index) => {
    const activityElement = document.createElement("p");
    activityElement.innerHTML = `Activity ${index + 1}: ${
      activity.type
    }, Duration: ${activity.duration} mins, Distance: ${activity.distance} km`;
    container.appendChild(activityElement);
  });
}

function displayGoals(goals) {
  const container = document.getElementById("goals-container");
  container.innerHTML = "";
  goals.forEach((goal, index) => {
    const goalElement = document.createElement("p");
    goalElement.textContent = `Goal ${index + 1}: ${goal.name}, Target: ${
      goal.target
    }, Duration: ${goal.duration} days`;
    container.appendChild(goalElement);
  });
}

function logActivity(activity) {
  activities.push(activity);
  displayActivities(activities);
}

function displayMealInfo(meal) {
  const container = document.getElementById("selected-meal-info");
  container.innerHTML = "";
  if (meal) {
    container.innerHTML = `<p>Calories: ${meal.calories}, Protein: ${meal.protein}g, Carbs: ${meal.carbs}g, Fats: ${meal.fats}g</p>`;
  }
}

function setHealthGoal(goal) {
  healthGoals.push(goal);
  displayGoals(healthGoals);
}
