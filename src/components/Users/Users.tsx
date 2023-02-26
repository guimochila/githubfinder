import React from 'react';

import { useUsersState } from '../../context/users/users.context';
import UserItem from '../UserItem';

const userStyle = {
  marginTop: '30px',
  marginBottom: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

function Users() {
  const { users } = useUsersState();

  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
