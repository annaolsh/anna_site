import React, { Component } from 'react';
import Header from './components/Header.js';
import MainContainer from './containers/MainContainer.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <MainContainer></MainContainer>
      </div>
    );
  }
}

export default App;
