### Task Instructions

You have been provided with a starter code for an `EventCard` component in React. This component is designed to display details about an event, including its title, date, location, and a brief description. However, the current implementation is incomplete, and certain parts of the component are not dynamically displaying the event details as they should.

Your task is to modify the `EventCard` component so that it correctly displays the event's date, location, and description based on the props passed to it. The title implementation is already completed for you as an example.

#### Requirements:

1. **Display the Event Date**:

   - Inside the `dateLocation` `div`, update the component to display the event's date. You will need to access the `date` property from the component's `props` and render it where indicated by the comment.

2. **Display the Event Location**:

   - Alongside the event date, within the same `dateLocation` `div`, display the event's location. Access the `location` property from the `props` and render it next to the date, separated by a "|".

3. **Display the Event Description**:
   - In the `description` `div`, display the event's description. This will involve accessing the `description` property from the `props` and rendering it within the div designated for the description.

#### Example of How to Access Props:

The title is displayed using `{props.title}`. Use a similar approach to display the date, location, and description.
