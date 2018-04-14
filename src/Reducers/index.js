import { combineReducers } from 'redux';
import user from './usersReducer';
import rides from './rideReducer.js';
import month from './dateReducer.js';
import stats from './riderStatsReducer.js';
import bikes from './bikesReducer.js';

const rootReducer = combineReducers({
  user,
  rides,
  month,
  stats,
  bikes
});

export default rootReducer;