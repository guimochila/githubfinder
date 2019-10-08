import React from 'react';

import { useUsersState } from '../../context/users/users.context';

function Alert() {
  const { alert } = useUsersState();

  if (!alert) {
    return null;
  }

  const { message, status } = alert;

  return (
    <div className={`alert alert-${status}`}>
      <i className="fas fa-info-circle" /> {message}
    </div>
  );
}

export default Alert;
