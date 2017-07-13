import React from 'react';
import '../styles/NamesInput.css';

export const NamesInput = (props) => {
  return (
    <div className="NamesInput-Container">
      <form className="NamesInput-Form">
        <input
          className="NamesInput-InputField"
          onChange={(e) => props.handleInput(e.target.value)}
          placeholder="Enter a list of comma separated names..."
          type="text"
        />
        <button
          type="submit"
          onSubmit={props.handleSubmit}
        >
          Groupify
        </button>
      </form>
    </div>
  );
}
