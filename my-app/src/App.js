import './App.css';
import Exercise from './Exercise.js';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionActive: false,
      exerciseType: null
    }

    this.handleDirectionalClick = this.handleDirectionalClick.bind(this);
    this.handleNumeralsClick = this.handleNumeralsClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }


  handleNumeralsClick() {
    this.setState({ selectionActive: true });
    this.setState({ exerciseType: 'number' });
  }

  handleDirectionalClick() {
    this.setState({ selectionActive: true });
    this.setState({ exerciseType: 'direction' });
  }

  handleBackClick() {
    this.setState({ selectionActive: false });
    this.setState({ exerciseType: null });
  }



  render() {
    return (
      <div className="App">
        <button className="back-button" onClick={this.handleBackClick}>
          Back
        </button>

        <div className="center-screen">
          {!this.state.selectionActive &&
            <div>
              <button className="select-exercise-button" onClick={this.handleNumeralsClick}>
                Odd/Even integers
              </button>
              <br />
              <button className="select-exercise-button" onClick={this.handleDirectionalClick}>
                Directional commands
              </button>
            </div>}

          {this.state.selectionActive ? <Exercise exerciseType={this.state.exerciseType} /> : null}

        </div>
      </div>

    );
  }
}

export default App;
