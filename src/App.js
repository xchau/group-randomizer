import React, { Component } from 'react';
import './styles/App.css';

import { NameInput } from './components/NameInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      test: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(text) {
    this.setState({
      test: text
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-Title">Group Randomizer</p>
        <NameInput
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
