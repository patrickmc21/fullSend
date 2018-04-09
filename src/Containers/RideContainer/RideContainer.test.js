import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { getAthleteActivities } from '../../api/external-api-calls/getAthleteActivities';
import { getTrails } from '../../api/external-api-calls/getTrails';
import updateUserRides from '../../api/internal-api-calls/updateUserRides';
import rideCleaner from '../../api/helpers/rideCleaner';
import * as actions from '../../Actions';
import { 
  RideContainer, 
  mapStateToProps, 
  mapDispatchToProps 
} from './RideContainer';
import * as mocks from '../../mock-data/mock-data';

jest.mock('../../api/external-api-calls/getAthleteActivities');
jest.mock('../../api/external-api-calls/getTrails');
jest.mock('../../api/internal-api-calls/updateUserRides');
jest.mock('../../api/helpers/rideCleaner');

describe('RideContainer', () => {

  let mockedUser;
  let mockedRides;
  let mockedUpdateRides;
  let wrapper;

  beforeEach(() => {
    mockedUser = mocks.mockUser;
    mockedRides = [];
    mockedUpdateRides = jest.fn();
    wrapper = shallow(
      <RideContainer
        user={mockedUser}
        rides={mockedRides}
        updateRides={mockedUpdateRides} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

describe('mapStateToProps', () => {

  let mapped;
  let mockedUser;
  let mockedRides;
  let mockedState;

  beforeEach(() => {
    mockedUser = mocks.mockUser;
    mockedRides = [mocks.mockRide];
    mockedState = {user: mockedUser, rides: mockedRides};
    mapped = mapStateToProps(mockedState);
  });


  it('should map user to props', () => {
    const expected = mockedUser;
    expect(mapped.user).toEqual(expected);
  });

  it('should map rides to props', () => {
    const expected = mockedRides;
    expect(mapped.rides).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {

  it('should map updateRides to props', () => {
    const mockedRides = [mocks.mockRide];
    const expected = {
      type: 'UPDATE_RIDES',
      rides: mockedRides
    };
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.updateRides(mockedRides);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});