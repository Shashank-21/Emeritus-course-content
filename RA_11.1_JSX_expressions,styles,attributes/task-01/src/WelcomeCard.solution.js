import React from "react";
import "./WelcomeCard.css"; // Import the CSS file here

function WelcomeCard({ name }) {
  return (
    <div className="welcome-card">
      {/* Todo: Write a 'h1' tag with the text `Welcome, [name]!`. Where 'name' is the name property passed to this component. */}
      {/* For example, if name is Steve, the h1 tag should contain the text "Welcome, Steve!"*/}
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default WelcomeCard;
