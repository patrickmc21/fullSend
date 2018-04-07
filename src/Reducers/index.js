import { combineReducers } from 'redux';
import users from './usersReducer';
import rides from './rideReducer.js';

const rootReducer = combineReducers({
  users
});

export default rootReducer;