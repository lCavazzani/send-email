import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi there!</h2>
          <p className='App-intro'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          href="/auth/google"
          >
            Click here to sign with Google
          </a>
        </header>
      </div>
    );
  }
}

export default App;
