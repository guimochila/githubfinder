import React, { Fragment } from 'react';

import Users from '../../components/Users';
import Spinner from '../../components/Spinner';
import Search from '../../components/Search';
import Alert from '../../components/Alert';
import { useUsersState } from '../../context/users/users.context';

function Home() {
  const { users, isLoading } = useUsersState();

  return (
    <Fragment>
      <Alert alert={alert} />
      <Search shouldShowClearBtn={!!users.length} />
      {isLoading ? <Spinner /> : <Users />}
    </Fragment>
  );
}

export default Home;
