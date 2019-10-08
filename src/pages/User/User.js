import React, { useEffect, useState, Fragment } from 'react';

import Profile from '../../components/Profile';
import Repo from '../../components/Repo';
import Spinner from '../../components/Spinner';
import { getUser, getUserRepos } from '../../api/github';

function User({ match }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserNotFound, setIsUserNotFound] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const { username } = match.params;
      const user = await getUser(username).catch(() => setIsUserNotFound(true));
      const repos = await getUserRepos(username);
      setUser(user);
      setRepos(repos);
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

  return (
    <Fragment>
      <Profile user={user} />
      {repos.map(repo => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
}

export default User;
