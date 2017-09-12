import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';



class App extends Component {
  render() {
    return (
      <div className ="portfolioContainer">
        <Header/>
          <Introduction/>
          <Projects/>
      </div>
    );
  }
}

export default App;
