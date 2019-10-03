import React, { Fragment } from 'react';

import spinnerImg from '../../static/spinner.gif';

function Spinner() {
  return (
    <Fragment>
      <img
        src={spinnerImg}
        alt="Loading..."
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
}

export default Spinner;
