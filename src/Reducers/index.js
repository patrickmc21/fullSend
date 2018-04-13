import { combineReducers } from 'redux';
import user from './usersReducer';
import rides from './rideReducer.js';
import month from './dateReducer.js';
import stats from './riderStatsReducer.js';

const rootReducer = combineReducers({
  user,
  rides,
  month,
  stats
});

export default rootReducer;