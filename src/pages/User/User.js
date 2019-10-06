import React, { Component } from 'react';

import Profile from '../../components/Profile';
import Spinner from '../../components/Spinner';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_AUTHORIZATION = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

export class User extends Component {
  state = {
    user: {},
    loading: true,
    userNotFound: false,
  };

  componentDidMount() {
    const { username } = this.props.match.params;
    this.getUser(username);
  }

  getUser = async username => {
    const res = await fetch(
      `${GITHUB_API_URL}/users/${username}?${GITHUB_AUTHORIZATION}`,
    );

    if (res.status >= 404) {
      this.setState({ userNotFound: true, loading: false });
      return;
    }

    const data = await res.json();

    this.setState({ user: data, loading: false });
  };

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
