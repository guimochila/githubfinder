import React, { useEffect, useState, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Profile from '../../components/Profile';
import Repo from '../../components/Repo';
import Spinner from '../../components/Spinner';
import { getUser, getUserRepos } from '../../api/github';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '30px',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem',
  },
}));

function User({ match }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserNotFound, setIsUserNotFound] = useState(false);
  const classes = useStyles();

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
      <Helmet>
        <title>Github Finder | User {user.login || ''}</title>
      </Helmet>

      <Box className={classes.container} component="div">
        <Profile user={user} />
        <Typography component="h3">
          The latest modified repositories:
        </Typography>
        <List className={classes.root}>
          {repos.map(repo => (
            <div key={repo.id}>
              <Repo repo={repo} />
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </Box>
    </Fragment>
  );
}

export default User;
