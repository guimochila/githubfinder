import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Container from '@material-ui/core/Container';

import './App.css';

import { UsersProvider } from './context/users/users.context';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <UsersProvider>
        <HelmetProvider>
          <Router>
            <div className="App">
              <Navbar />
              <Container maxWidth="md">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/user/:username" component={User} />
                  <Route exact path="/about" component={About} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </div>
          </Router>
        </HelmetProvider>
      </UsersProvider>
    </ErrorBoundary>
  );
}

export default App;
