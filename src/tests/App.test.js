import React from 'react';
import ReactDOM from 'react-dom';

import { assert, expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
});

it('runs with enzyme', () => {
  expect(
    shallow(
      <App />
    ).length
  ).to.equal(1);
});

it('has empty names array initially', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state('names')).to.eql([]);
});

it('updates state on text input', () => {
  const wrapper = shallow(<App />);

  wrapper.instance().handleInput('Testing!');

  expect(wrapper.state('test')).to.equal('Testing!');
});
