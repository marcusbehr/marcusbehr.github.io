import { Component, useState, useEffect } from 'react';
import Speech from './Speech.js';

class Direction extends Component {
    constructor() {
      super();
  
      this.state = {
       direction: null,
       directions: ['Forward', 'Backward', 'Left', 'Right'],
       directionCount: 0
      }

      this.startDirectionExercise = this.startDirectionExercise.bind(this);
  }

  
  
  startDirectionExercise(){
    this.setState({direction: this.state.directions[Math.floor(Math.random() * (3 - 0+ 1)) + 0]}) //Math.floor(Math.random() * (max - min + 1)) + min; 
    this.setState({directionCount: this.state.directionCount+1})
  }
  
  render() {return (
    <div className="Direction">
     <button onClick={this.startDirectionExercise}>
      Begin 
    </button>
    
    <div>{this.state.direction}</div>

    <div className='speech'>
        <Speech textToSpeech={this.state.direction} directionCount={this.state.directionCount}/ >
    </div>
    </div>
   
    
  );}  
  }
  
  export default Direction;