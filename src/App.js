import React, { Component } from 'react';
import './styles/App.css';

import { createSet, groupify } from './utils/utils';
import { NamesInput } from './components/NamesInput';
import { GroupsDisplay } from './components/GroupsDisplay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: '',
      groups: [],
      groupSize: { label: '2', value: 2 }
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNumSelect = this.handleNumSelect.bind(this);
  }

  handleInput(text) {
    this.setState({
      names: text
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.names) {
      let set = createSet(this.state.names);

      this.setState({
        groups: groupify(set, this.state.groupSize.value)
      });
    }
  }

  handleNumSelect(choice) {
    this.setState({
      groupSize: choice
    });
  }

  render() {
    return (
      <div className="App-Container">
        <NamesInput
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          handleNumSelect={this.handleNumSelect}
          initialGroupSize={this.state.groupSize}
        />
        <GroupsDisplay
          groups={this.state.groups}
        />
      </div>
    );
  }
}

export default App;
