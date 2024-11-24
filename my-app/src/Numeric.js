import { Component, useState } from 'react';

class Numeric extends Component {
    constructor() {
      super();
  
      this.state = {
       number: null
      }

      this.startNumericExercise = this.startNumericExercise.bind(this);
  }
  

  startNumericExercise() {
    this.setState({number: Math.floor(Math.random() * (99 - 1+ 1)) + 1})
  }
  
  
  render() {return (
    <div className="Numeric">
    <button onClick={this.startNumericExercise}>
      Begin 
    </button>
    
    <div>{this.state.number}</div>
    </div>
    
  );}  
  }
  
  export default Numeric;