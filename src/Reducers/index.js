import { combineReducers } from 'redux';
import user from './usersReducer';
import rides from './rideReducer.js';
import month from './dateReducer.js';

const rootReducer = combineReducers({
  user,
  rides,
  month
});

export default rootReducer;