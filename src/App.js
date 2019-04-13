import React, { Component } from 'react';
import SchoolCard from './components/SchoolCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SchoolCard />
        </header>
      </div>
    );
  }
}



export default App;
