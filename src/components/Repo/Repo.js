import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  yellowAvatar: {
    margin: 10,
    backgroundColor: '#f7df1e',
  },
});

function Repo({ repo }) {
  const { name, language, html_url } = repo;
  const classes = useStyles();

  const pickColor = language => {
    if (language === 'JavaScript') {
      return classes.yellowAvatar;
    } else {
      return classes.avatar;
    }
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={pickColor(language)}>
          {language ? language[0] : 'R'}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={html_url} />
    </ListItem>
  );
}

export default Repo;
