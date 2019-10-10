import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
  },
  cardContent: {
    textAlign: 'center',
  },
}));

function UserItem({ user }) {
  const { login, avatar_url, html_url } = user;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar arial-label={login} src={avatar_url}>
            {login[0].toUpperCase()}
          </Avatar>
        }
        title={login}
        subheader={html_url}
      />
      <CardContent className={classes.cardContent}>
        <Button component={Link} to={`/user/${login}`}>
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
