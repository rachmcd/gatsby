import React from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/homepage/Homepage'
import Illustration from './components/illustration/Illustration'
import Reel from './components/reel/Reel'
import Resume from './components/resume/Resume'

function App() {


  return (
    <div>
      <Route exact path = "/">
        <Homepage />
      </Route>
      <Route path = "/illustration">
        <Illustration />
      </Route>
      <Route path = "/reel">
        <Reel />
      </Route>
      <Route path = "/resume">
        <Resume />
      </Route>
    </div>
  );
}

export default App;
