### Task Instructions

**Objective:** Modify the given JavaScript code to dynamically load content into a webpage without reloading the page when different sections are clicked.

**Tasks:**

1. **Load Content Dynamically:** You have a function named `loadContent` that is designed to fetch HTML content from a provided file and display it within the element with the ID `content`. This function is already being used to load content for the "About" section.

2. **Implement Services Section Loading:** Similar to the "About" section, implement the loading of content for the "Services" section. When the element with the ID `services` is clicked, call the `loadContent` function with `"services.html"` as the argument to load the content for the "Services" section dynamically.

**Expected Behavior:**

- When the user clicks on the element with the ID `about`, the content from `about.html` should be loaded into the element with the ID `content`.
- When the user clicks on the element with the ID `services`, the content from `services.html` should be loaded into the same element (`content`).
