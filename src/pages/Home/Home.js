import React, { Component } from 'react';

import Users from '../../components/Users';
import Spinner from '../../components/Spinner';
import Search from '../../components/Search';
import Alert from '../../components/Alert';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_AUTHORIZATION = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

export class Home extends Component {
  state = {
    users: [],
    loading: true,
    alert: null,
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await fetch(`${GITHUB_API_URL}/users?${GITHUB_AUTHORIZATION}`);
    const data = await res.json();

    this.setState({ users: data, loading: false });
  };

  searchUsers = async (searchTerm = '') => {
    const res = await fetch(
      `${GITHUB_API_URL}/search/users?q=${searchTerm}&${GITHUB_AUTHORIZATION}`,
    );
    const data = await res.json();

    this.setState({ users: data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };
  render() {
    const { loading, users, alert } = this.state;

    return (
      <div className="container">
        <Alert alert={alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          shouldShowClearBtn={!!users.length}
          setAlert={this.setAlert}
        />
        {loading ? <Spinner /> : <Users users={users} />}
      </div>
    );
  }
}

export default Home;
