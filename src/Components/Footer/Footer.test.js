import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('footer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});