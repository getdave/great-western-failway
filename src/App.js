import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const EXCUSES = [
  `there's a bird on the line`,
  `the rails got a bit hot init`,
  `the guard forgot to set his alarm`,
  `there was a problem with the signalling`,
  `the current train has a fault`,
  `ongoing engineering works`,
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExcuses: false,
      excuse: EXCUSES[Math.floor(Math.random() * EXCUSES.length)]
    };

    this.showExcuse = this.showExcuse.bind(this);
  }

  showExcuse() {
    if (!this.state.showExcuses) {
      this.setState({
        showExcuses: !this.state.showExcuses
      });
    } 

        this.setState({
            excuse: EXCUSES[Math.floor(Math.random() * EXCUSES.length)]
        });

    


  }

  render() {
    const excuse = this.state.showExcuses
      ? this.state.excuse
      : '';

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Great Western Failway</h1>
        </header>
        <p className="App-intro">
          Is your train on time? I doubt it...
        </p>
        
        <div>
        {excuse}
        </div>

        <button onClick={this.showExcuse}>
          { !this.state.showExcuses ? 'Check Your Train Time' : 'Get another excuse' }
        </button>
      </div>
    );
  }
}

export default App;
