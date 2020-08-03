import React, { Component } from 'react';
import Counter from './counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: 'Alex',
    count2: 0
  }

  increaseCount(value) {
    // this.setState({count: this.state.count + 1});
    this.setState((state) => ({count2: state.count2 + value}));
  }
  
  render() {
    // const arr = [];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Добро пожаловать в React.
        </p>
        {/* <Counter emptyArray={arr} /> */}
        <Counter 
          name={this.state.name}
          countByUser={this.state.count2}
          increaseCount={(value) => this.increaseCount(value)}
        />
      </div>
    );
  }
}

export default App;
