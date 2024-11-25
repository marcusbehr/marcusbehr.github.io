import { Component, useState } from 'react';
import Speech from './Speech.js';


class Numeric extends Component {
    constructor() {
      super();
  
      this.state = {
       number: null,
       numberCount: 0,
       time: 0
      }

      this.startNumericExercise = this.startNumericExercise.bind(this);
      this.generateNumber = this.generateNumber.bind(this);
  }
  
  generateNumber() {
    this.setState({number: Math.floor(Math.random() * (99 - 1+ 1)) + 1}) //Math.floor(Math.random() * (max - min + 1)) + min; 
    this.setState({numberCount: this.state.numberCount+1})
  }
  
  startNumericExercise(){
    var rand = Math.round(Math.random() * (3000 - 500)) + 500; //Math.round(Math.random() * (3000 - 500)) + 500;
    //can set time to be edited in UI in future updated
    this.setState({time: this.state.time + rand});

    if (this.state.time < 30000){
      setTimeout(function() {
        this.generateNumber();
        this.startNumericExercise();
      }.bind(this), rand)
    }

   //null out number when exrecise is done. may need to split into other method
  }
  
  render() {return (
    <div className="Direction">
     <button onClick={this.startNumericExercise}>
      Begin 
    </button>
    
    <div>{this.state.number}</div>

    <div className='speech'>
        <Speech numberToSpeech={this.state.number} numberCount={this.state.numberCount}/ >
    </div>
    </div>
   
    
  );}  
  }
  
  export default Numeric;