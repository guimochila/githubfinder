import React from 'react';
import PropTypes from 'prop-types';

function Alert({ alert }) {
  if (!alert) {
    return null;
  }

  const { message, type } = alert;

  return (
    <div className={`alert alert-${type}`}>
      <i className="fas fa-info-circle" /> {message}
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default Alert;
