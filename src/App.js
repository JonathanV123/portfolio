import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Divider from './components/Divider';




class App extends Component {
  render() {
    return (
      <div className ="portfolioContainer">
        <Header/>
          <Introduction/>
          <Divider/>
          <Projects/>
      </div>
    );
  }
}

export default App;
