import React, { useEffect, useState } from 'react';

import Profile from '../../components/Profile';
import Spinner from '../../components/Spinner';
import { getUser } from '../../api/github';

function User({ match }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUserNotFound, setIsUserNotFound] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const { username } = match.params;
      const user = await getUser(username).catch(() => setIsUserNotFound(true));
      setUser(user);
      setIsLoading(false);
    }

    fetchUser();
  }, [match.params]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isUserNotFound) {
    return <h1>Sorry, user not found.</h1>;
  }

  return <Profile user={user} />;
}

export default User;
