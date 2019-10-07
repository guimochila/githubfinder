import React, { useState, useEffect } from 'react';

import Users from '../../components/Users';
import Spinner from '../../components/Spinner';
import Search from '../../components/Search';
import Alert from '../../components/Alert';
import { getUsers, searchUsers } from '../../api/github';

function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers();
      setUsers(users);
      setIsLoading(false);
    }

    fetchUsers();
  }, []);

  const search = async (searchTerm = '') => {
    const users = await searchUsers(searchTerm);

    this.setState({ users, loading: false });
  };

  const clearUsers = () => {
    this.setState({ users: [] });
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <div className="container">
      <Alert alert={alert} />
      <Search
        searchUsers={search}
        clearUsers={clearUsers}
        shouldShowClearBtn={!!users.length}
        setAlert={showAlert}
      />
      {isLoading ? <Spinner /> : <Users users={users} />}
    </div>
  );
}

export default Home;
