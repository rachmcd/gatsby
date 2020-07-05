import React from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/homepage/Homepage'
import Illustration from './components/illustration/Illustration'
import Reel from './components/reel/Reel'
import Resume from './components/resume/Resume'
import styled from 'styled-components'


const StyledDiv = styled.div`
  width: 90%;

  @media (max-width: 500px) {
    width: 100%;
  }

`

function App() {


  return (
    <StyledDiv>
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
    </StyledDiv>
  );
}

export default App;
