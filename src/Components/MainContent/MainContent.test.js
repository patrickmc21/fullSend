import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

describe('MainContent', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MainContent />);
    expect(wrapper).toMatchSnapshot();
  });
});