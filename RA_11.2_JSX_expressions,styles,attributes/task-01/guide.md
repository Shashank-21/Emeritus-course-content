### Task 1: Personalize the Welcome Message

#### File to Edit

`WelcomeCard.js`

#### Task Description

In this task, you will be updating the `WelcomeCard` component to display a personalized welcome message. The component should greet the user by name.

#### Instructions

1. Inside the `div` with the class `welcome-card`, create an `h1` tag.
2. The `h1` tag should display the text `Welcome, ` followed by the name passed to the `WelcomeCard` component.
3. The `name` should be dynamically inserted into the `h1` tag using curly braces `{}`.
4. For example, if the `name` prop has the value "Steve", the `h1` tag should display "Welcome, Steve!".

#### Example

If you pass `name="Steve"` to the `WelcomeCard`, your component should render:

```html
<div class="welcome-card">
	<h1>Welcome, Steve!</h1>
</div>
```

#### Tips

- Remember to use curly braces `{}` to insert JavaScript expressions into JSX.
