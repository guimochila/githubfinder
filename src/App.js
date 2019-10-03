import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Users from './components/Users';
import Spinner from './components/Spinner';

const GITHUB_API_URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET_ID}`;

class App extends React.Component {
  state = {
    users: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await fetch(GITHUB_API_URL);
    const data = await res.json();

    this.setState({ users: data, loading: false });
  }

  render() {
    const { loading, users } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {loading ? <Spinner /> : <Users users={users} />}
        </div>
      </div>
    );
  }
}

export default App;
