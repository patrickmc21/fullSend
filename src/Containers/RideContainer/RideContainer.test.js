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