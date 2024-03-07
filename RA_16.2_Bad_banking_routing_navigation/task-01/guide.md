### Assignment Instructions

Your task is to integrate routing into the Bad Bank application using React Router's `HashRouter`. You'll define multiple routes, each corresponding to a different component, enabling the application to display different content based on the URL.

1. **Integrate `HashRouter`**: Ensure that the `HashRouter` wraps the `Routes` component in your `App.js` file. This will enable hash-based routing in your application.

2. **Define Routes**: Inside the `Routes` component, define a `Route` for each component in the application. Each route should have a `path` and an `element` prop, where `path` defines the URL path, and `element` specifies the component to render.

3. **Components and Paths**:

   - The home page ("/") should render the `Home` component.
   - The "/login" path should render the `Login` component.
   - The "/alldata" path should render the `AllData` component.
   - The "/withdraw" path should render the `Withdraw` component.
   - The "/balance" path should render the `Balance` component.
   - The "/deposit" path should render the `Deposit` component.
   - The "/createaccount" path should render the `CreateAccount` component.

4. **Navigation**: Update the `NavBar` component to include links to all the routes using the `Link` component from `react-router-dom`.
