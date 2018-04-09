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
  let mockedRideActivity;

  beforeEach(() => {
    mockedUser = mocks.mockUser;
    mockedRides = mocks.mockRides;
    mockedRideActivity = [mocks.mockUserActivityLog[0]];
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

  it('should match the snapshot if no rides present', () => {
    mockedRides = [];
    wrapper = shallow(
      <RideContainer
        user={mockedUser}
        rides={mockedRides}
        updateRides={mockedUpdateRides} />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('could call getRidesTimeSpan on click', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getRidesTimeSpan');
    wrapper.instance().handleClick();
    expect(spy).toHaveBeenCalledWith(mockedRides);
  });

  it('could call getAthleteActivities on click', () => {
    wrapper.instance().handleClick();
    expect(getAthleteActivities).toHaveBeenCalled();
  });

  it('should call filterActivities on click', async () => {
    const spy = jest.spyOn(wrapper.instance(), 'filterActivities');
    await wrapper.instance().handleClick();
    expect(spy).toHaveBeenCalled();
  });

  it('could call getTrails on click', async () => {
    const spy = jest.spyOn(wrapper.instance(), 'getTrails');
    await wrapper.instance().handleClick();
    expect(spy).toHaveBeenCalled();
  });

  it('should call rideCleaner on click', async () => {
    await wrapper.instance().handleClick();
    expect(rideCleaner).toHaveBeenCalled();
  });

  it('should call updateRides on click', async () => {
    await wrapper.instance().handleClick();
    expect(mockedUpdateRides).toHaveBeenCalled();
  });

  it('should call addRidesToLocalServer on click', async () => {
    const spy = jest.spyOn(wrapper.instance(), 'addRidesToLocalServer');
    await wrapper.instance().handleClick();
    expect(spy).toHaveBeenCalled();
  });

  it('should throw an error on bad click', async () => {
    mockedUpdateRides = jest.fn()
      .mockImplementation(() => {
        throw {message: 'BAD!'}
      });
    wrapper = shallow(
      <RideContainer
        user={mockedUser}
        rides={mockedRides}
        updateRides={mockedUpdateRides} />
    );
    const expected = 'BAD!';
    await wrapper.instance().handleClick();
    expect(wrapper.state().errorStatus).toEqual(expected);
  })

  it('should filter activities by type', () => {
    const activities = mocks.mockUserActivityLog;
    const expected = [activities[0]];
    const results = wrapper.instance().filterActivities(activities);
    expect(results).toEqual(expected);
  });

  it('should call getTrails api call', async () => {
    const expected = mockedRideActivity[0].start_latlng;
    await wrapper.instance().getTrails(mockedRideActivity);
    expect(getTrails).toHaveBeenCalledWith(...expected);
  });

  it('should return an object of ride and trail stats', async () => {
    const expected = mocks.mockActivityAndTrail;
    const results = await wrapper.instance().getTrails(mockedRideActivity);
    expect(results).toEqual([expected])
  });

  it('should return the before and after epoch', () => {
    const mockBefore = Date.parse(moment().startOf('day'))/1000;
    const mockAfter = mockedRides[0].epoch;
    const expected = {
      before: mockBefore,
      after: mockAfter
    };
    const results = wrapper.instance().getRidesTimeSpan(mockedRides);
    expect(results).toEqual(expected);
  });

  it('should return a default after if no rides present', () => {
    mockedRides = [];
    wrapper = shallow(
      <RideContainer
        user={mockedUser}
        rides={mockedRides}
        updateRides={mockedUpdateRides} />
    );
    const expected = Date.parse(moment().startOf('year'))/1000;
    const results = wrapper.instance().getRidesTimeSpan(mockedRides).after;
    expect(results).toEqual(expected);
  });

  it('should add rides to local server', () => {
    wrapper.instance().addRidesToLocalServer(mockedRides, mockedUser.id);
    expect(updateUserRides).toHaveBeenCalled();
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