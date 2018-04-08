import { combineReducers } from 'redux';
import user from './usersReducer';
import rides from './rideReducer.js';

const rootReducer = combineReducers({
  user,
  rides
});

export default rootReducer;