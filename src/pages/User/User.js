import React, { Component } from 'react';

import Profile from '../../components/Profile';
import Spinner from '../../components/Spinner';
import { getUser } from '../../api/github';

export class User extends Component {
  state = {
    user: {},
    loading: true,
    userNotFound: false,
  };

  async componentDidMount() {
    const { username } = this.props.match.params;
    const user = await getUser(username).catch(() =>
      this.setState({ userNotFound: true }),
    );
    this.setState({ user, loading: false });
  }

  render() {
    const { user, loading, userNotFound } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (userNotFound) {
      return <h1>Sorry, user not found.</h1>;
    }

    return <Profile user={user} />;
  }
}

export default User;
