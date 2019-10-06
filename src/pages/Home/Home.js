import React, { Component } from 'react';

import Users from '../../components/Users';
import Spinner from '../../components/Spinner';
import Search from '../../components/Search';
import Alert from '../../components/Alert';
import { getUsers, searchUsers } from '../../api/github';

export class Home extends Component {
  state = {
    users: [],
    loading: true,
    alert: null,
  };

  async componentDidMount() {
    const users = await getUsers();

    this.setState({ users, loading: false });
  }

  search = async (searchTerm = '') => {
    const users = await searchUsers(searchTerm);

    this.setState({ users, loading: false });
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
          searchUsers={this.search}
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
