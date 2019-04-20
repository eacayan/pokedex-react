import React, { Component } from 'react';
import PokeHome from './components/home/PokeHome';
import PokeDetail from './components/details/PokeDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={PokeHome} />
          <Route path='/pokemon/:pokemonName' component={PokeDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;