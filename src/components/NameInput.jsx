import React from 'react';
import '../styles/NameInput.css';

export const NameInput = (props) => {
  return (
    <div className="NameInput-Container">
      <form className="NameInput-Form">
        <input
          className="NameInput-InputField"
          onChange={(e) => props.handleInput(e.target.value)}
          placeholder="Enter a list of comma separated names..."
          type="text"
        />
      </form>
    </div>
  );
}
