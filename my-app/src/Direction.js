import { Component, useState, useEffect } from 'react';
import Speech from './Speech.js';

class Direction extends Component {
    constructor() {
      super();
  
      this.state = {
       direction: null,
       directions: ['Forward', 'Backward', 'Left', 'Right'],
       directionCount: 0,
       time: 0
      }

      this.startDirectionExercise = this.startDirectionExercise.bind(this);
      this.generateDirection = this.generateDirection.bind(this);
  }

  

  generateDirection() {
    this.setState({direction: this.state.directions[Math.floor(Math.random() * (3 - 0+ 1)) + 0]}) //Math.floor(Math.random() * (max - min + 1)) + min; 
    this.setState({directionCount: this.state.directionCount+1})
  }
  
  startDirectionExercise(){
    var rand = Math.round(Math.random() * (3000 - 500)) + 500; //Math.round(Math.random() * (3000 - 500)) + 500;
    //can set time to be edited in UI in future updated
    this.setState({time: this.state.time + rand});

    if (this.state.time < 30000){
      setTimeout(function() {
        this.generateDirection();
        this.startDirectionExercise();
      }.bind(this), rand)
    }

   //null out direction when exrecise is done. may need to split into other method
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