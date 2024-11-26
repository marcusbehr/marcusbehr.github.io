import { Component } from 'react';
import Speech from './Speech.js';


class Exercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: null,
      numberCount: 0,
      direction: null,
      directions: ['Forward', 'Backward', 'Left', 'Right'],
      directionCount: 0,
      time: 0,
      exerciseActive: false,
      exerciseType: this.props.exerciseType
    }

    this.startNumericExercise = this.startNumericExercise.bind(this);
    this.generateNumber = this.generateNumber.bind(this);
    this.startDirectionExercise = this.startDirectionExercise.bind(this);
    this.generateDirection = this.generateDirection.bind(this);
    this.startExercise = this.startExercise.bind(this);
  }

  generateNumber() {
    this.setState({ number: Math.floor(Math.random() * (99 - 1 + 1)) + 1 }) //Math.floor(Math.random() * (max - min + 1)) + min; 
    this.setState({ numberCount: this.state.numberCount + 1 })
  }

  startNumericExercise() {
    var rand = Math.floor(Math.random() * (3000 - 1000)) + 1000; 
    this.setState({ time: this.state.time + rand });
    this.setState({ exerciseActive: true });

    if (this.state.time < 30000) {
      setTimeout(function () {
        this.generateNumber();
        this.startNumericExercise();
      }.bind(this), rand)
    } else {
      this.setState({ time: 0 });
      this.setState({ exerciseActive: false });
      this.setState({ number: null });
    }
  }

  generateDirection() {
    this.setState({ direction: this.state.directions[Math.floor(Math.random() * (3 - 0 + 1)) + 0] }) 
    this.setState({ directionCount: this.state.directionCount + 1 })
  }

  startDirectionExercise() {
    var rand = Math.floor(Math.random() * (3000 - 1000)) + 1000; 
    this.setState({ time: this.state.time + rand });
    this.setState({ exerciseActive: true });

    if (this.state.time < 30000) {
      setTimeout(function () {
        this.generateDirection();
        this.startDirectionExercise();
      }.bind(this), rand)
    } else {
      this.setState({ time: 0 });
      this.setState({ exerciseActive: false });
      this.setState({ direction: null });
    }
  }

  startExercise() {
    if (this.state.exerciseType == 'number') {
      this.startNumericExercise();
    } else {
      this.startDirectionExercise();
    }
  }



  render() {
    return (
      <div className="Number">
        {!this.state.exerciseActive && <button className="exercise-begin-button" onClick={this.startExercise}>
          Begin
        </button>}


        {this.state.exerciseActive && <div className="exercise-display center-screen">{this.state.number}{this.state.direction}</div>}

        <div className='speech'>
          <Speech numberToSpeech={this.state.number} numberCount={this.state.numberCount} />
        </div>

        <div className='speech'>
          <Speech textToSpeech={this.state.direction} directionCount={this.state.directionCount} />
        </div>

      </div>


    );
  }
}

export default Exercise;