import React from 'react';
import { shallow } from 'enzyme';
import { RiderStats, mapStateToProps } from './RiderStats';
import * as mock from '../../mock-data/mock-data';

describe('RiderStats', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <RiderStats
        user={mock.mockStravaUser}
        stats={mock.cleanStravaInfo} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {

  let mockState;
  let mapped;

  beforeEach(() => {
    mockState = {
      user: mock.mockStravaUser,
      stats: mock.cleanStravaInfo
    };
    mapped = mapStateToProps(mockState);
  });

  it('should map user to props', () => {
    const expected = mock.mockStravaUser;
    expect(mapped.user).toEqual(expected);
  });

  it('should map stats to props', () => {
    const expected = mock.cleanStravaInfo;
    expect(mapped.stats).toEqual(expected);
  });
});