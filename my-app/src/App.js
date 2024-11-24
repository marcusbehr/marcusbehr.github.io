import logo from './logo.svg';
import './App.css';
import Numeric  from './Numeric.js';
import Direction from './Direction.js';
import { Component, useState } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      content:null,
      directionalActive:false,
      numeralsActive:false
    }

    this.handleDirectionalClick = this.handleDirectionalClick.bind(this)
    this.handleNumeralsClick = this.handleNumeralsClick.bind(this)
   
}



handleNumeralsClick() {
  this.setState({numeralsActive: true});
  this.setState({directionalActive: false});
}

handleDirectionalClick() {
  this.setState({numeralsActive: false});
  this.setState({directionalActive: true});
}



render() {return (
  <div className="App">
    <button onClick={this.handleNumeralsClick}>
      Odd/Even integers
    </button>
    <br/>
    <button onClick={this.handleDirectionalClick}>
      Directional commands
    </button>

    {this.state.numeralsActive? <Numeric />: null }
    {this.state.directionalActive? <Direction />: null }

 
  
  </div>
  
);}  
}

export default App;
