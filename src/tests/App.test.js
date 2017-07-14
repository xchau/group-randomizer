import React from 'react';
import ReactDOM from 'react-dom';

import { assert, expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../App';
import { NamesInput } from '../components/NamesInput';
import { GroupsDisplay } from '../components/GroupsDisplay';

import Select from 'react-select';

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

it('has empty string of names initially', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state('names')).to.equal('');
});

it('renders all components correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.containsAllMatchingElements([
    <NamesInput />,
    <GroupsDisplay />
  ])).to.equal(true);
});

it('renders dropdown correctly', () => {
  const wrapper2 = shallow(<NamesInput />);

  expect(wrapper2.containsAllMatchingElements([<Select />]));
});

/* ------- NamesInput -------*/
it('updates state on text input', () => {
  const wrapper = shallow(<App />);

  wrapper.instance().handleInput('Hoa, Bell, Jaye');

  expect(wrapper.state('names')).to.eql('Hoa, Bell, Jaye');
});

it('updates state on number of groups selection', () => {
  const wrapper = shallow(<App />);

  wrapper.instance().handleNumSelect({label: "5", value: 5});
  expect(wrapper.state('groupSize')).to.eql({label: "5", value: 5});
});
