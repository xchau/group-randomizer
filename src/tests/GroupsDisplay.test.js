import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import { GroupsDisplay } from '../components/GroupsDisplay';

describe('#Test GroupsDisplay component', () => {
  const groups = [['Dave'], ['Zahra'], ['Chris']];

  it('receives correct groups prop', () => {
    const wrapper = shallow(<GroupsDisplay groups={groups} />);

    expect(wrapper.instance().props.groups.length).to.equal(3);
  });

  it('should render appropriate amount of divs for groups', () => {
    const wrapper = shallow(<GroupsDisplay groups={groups} />);

    expect(wrapper.find('.GroupsDisplay-Row').children().length).to.equal(3);
  });
});
