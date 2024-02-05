### Task Instructions

In the provided starter code for the `EventCard` component, props are passed and accessed traditionally using the `props` object. Your task is to refactor the component by applying destructuring to the props for a cleaner and more concise codebase.

Destructuring allows you to unpack properties from objects or arrays and assign them to distinct variables. This technique can make your code easier to read and maintain.

#### Requirements:

1. **Destructure Props in the Function Parameter**:

   - The starter code already includes destructured props in the function parameter (`{ title, date, location, description }`), but the component body does not utilize these destructured variables. Your task is to update the component to use these variables directly.

2. **Update Component to Use Destructured Props**:
   - **Title**: Update the component to use the `title` variable directly instead of accessing it through `props.title`.
   - **Date**: Replace `props.date` with the `date` variable that you have destructured from the props.
   - **Location**: Similarly, use the `location` variable in place of `props.location`.
   - **Description**: Lastly, update the component to use the `description` variable instead of `props.description`.

#### Instructions for Making Changes:

- Inside each JSX tag where `props.propertyName` is mentioned, replace it with the destructured variable name corresponding to that property. The destructuring is already done in the function's parameters, so you directly have access to `title`, `date`, `location`, and `description`.

#### Example of Correct Usage:

```jsx
<div className="title">{title}</div>
```

This example demonstrates how to use the destructured `title` variable. Apply a similar approach for `date`, `location`, and `description`.
