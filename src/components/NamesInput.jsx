import React from 'react';
import '../styles/NamesInput.css';

import { options } from '../utils/utils';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

export const NamesInput = (props) => {
  return (
    <div className="NamesInput-Container">
      <form
        className="NamesInput-Form"
        onSubmit={(e) => props.handleSubmit(e)}
      >
        <input
          className="NamesInput-InputField"
          onChange={(e) => props.handleInput(e.target.value)}
          placeholder="Enter a list of comma separated names..."
          type="text"
        />
        <div className="NamesInput-SecondRow">
          <Select
            className="NamesInput-Select"
            options={options}
            onChange={(choice) => props.handleNumSelect(choice)}
            placeholder="Select number of groups"
            resetValue={null}
            value={props.initialGroupSize}
          />
          <button type="submit">Groupify</button>
        </div>
      </form>
    </div>
  );
}
