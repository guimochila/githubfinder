import React from 'react';

function About() {
  return (
    <div className="all-center">
      <h1>About this App</h1>
      <p>App to search Github users</p>
      <p>Version: {process.env.REACT_APP_VERSION}</p>
    </div>
  );
}

export default About;
