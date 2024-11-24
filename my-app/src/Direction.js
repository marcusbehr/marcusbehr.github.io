import { Component, useState } from 'react';

class Direction extends Component {
    constructor() {
      super();
  
      this.state = {
       direction: null,
       directions: ['Forward', 'Backward', 'Left', 'Right'] 
      }

      this.startDirectionExercise = this.startDirectionExercise.bind(this);
  }
  
  startDirectionExercise(){
    this.setState({direction: this.state.directions[Math.floor(Math.random() * (3 - 0+ 1)) + 0]})

  }
  
  render() {return (
    <div className="Direction">
     <button onClick={this.startDirectionExercise}>
      Begin 
    </button>
    
    <div>{this.state.direction}</div>
    </div>
   
    
  );}  
  }
  
  export default Direction;