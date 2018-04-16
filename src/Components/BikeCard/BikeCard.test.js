import React from 'react';
import { shallow } from 'enzyme';
import { mockBikes } from '../../mock-data/mock-data';
import BikeCard from './BikeCard';

describe('BikeCard', () => {

  let wrapper;
  let mockBike;

  beforeEach(() => {
    mockBike = mockBikes[0];
    wrapper = shallow(<BikeCard bike={mockBike}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if user provides pic', () => {
    mockBike.description = 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/21';
    wrapper = shallow(<BikeCard bike={mockBike}/>);
    expect(wrapper).toMatchSnapshot();
  });
});