import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <Fragment>
      <Helmet>
        <title>Github Profile | Page not found</title>
      </Helmet>
      <div className="all-center">
        <h1>Ooops! Page not found!</h1>
      </div>
    </Fragment>
  );
}

export default NotFound;
