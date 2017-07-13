import React, { Component } from 'react';
import './styles/App.css';

import { NamesInput } from './components/NamesInput';
import { GroupsDisplay } from './components/GroupsDisplay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: '',
      groups: {}
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(text) {
    this.setState({
      names: text
    });
  }

  handleSubmit() {
    const set = this.state.names.split(',').map(elem => elem.trim()).filter(elem => elem);
  }

  render() {
    return (
      <div className="App">
        <p className="App-Title">Group Randomizer</p>
        <NamesInput
          handleInput={this.handleInput}
        />
        <GroupsDisplay />
      </div>
    );
  }
}

export default App;
