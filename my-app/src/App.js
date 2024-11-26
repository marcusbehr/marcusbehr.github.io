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
      numeralsActive:false,
      selectionActive:false
    }

    this.handleDirectionalClick = this.handleDirectionalClick.bind(this);
    this.handleNumeralsClick = this.handleNumeralsClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
   
}


handleNumeralsClick() {
  this.setState({numeralsActive: true});
  this.setState({directionalActive: false});
  this.setState({selectionActive: true});
}

handleDirectionalClick() {
  this.setState({numeralsActive: false});
  this.setState({directionalActive: true});
  this.setState({selectionActive: true});
}

handleBackClick() {
  this.setState({numeralsActive: false});
  this.setState({directionalActive: false});
  this.setState({selectionActive: false});
}



render() {return (
  <div className="App">
     <button className="back-button" onClick={this.handleBackClick}>
        Back
    </button> 

    <div className="center-screen">

   
{!this.state.selectionActive &&  <div>
      <button className="select-exercise-button" onClick={this.handleNumeralsClick}>
        Odd/Even integers
      </button> 
      <br/>
      <button className="select-exercise-button" onClick={this.handleDirectionalClick}>
        Directional commands
      </button> 
        </div> }

   

      {this.state.numeralsActive? <Numeric />: null }
      {this.state.directionalActive? <Direction />: null }
    </div>


 
  
  </div>
  
);}  
}

export default App;
