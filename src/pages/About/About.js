import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { version } from '../../../package.json';

function About() {
  return (
    <Fragment>
      <Helmet>
        <title>Github Finder | About</title>
      </Helmet>
      <div className="all-center">
        <h1>About this App</h1>
        <p>App to search Github users</p>
        <p>Version: {version}</p>
      </div>
    </Fragment>
  );
}

export default About;
