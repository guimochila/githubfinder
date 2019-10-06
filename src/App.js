import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:username" component={User} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
