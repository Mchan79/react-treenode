//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import {Router, Route} from 'react-router-dom'
import history from './history'
import Lorem from './components/lorem'
import Tree from './components/tree'

function App() {

  return (
    <Router history={history}>
      <Route exact path="/" component={Lorem}/>
      <Route exact path="/tree" component={Tree}/>
    </Router>
  );
}

export default App;
