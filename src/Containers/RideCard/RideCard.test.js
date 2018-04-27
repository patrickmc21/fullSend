import React from 'react';
import { shallow } from 'enzyme';
import RideCard from './RideCard';
import { mockRide } from '../../mock-data/mock-data';

describe('RideCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<RideCard ride={mockRide}/>);
    expect(wrapper).toMatchSnapshot();
  });
});