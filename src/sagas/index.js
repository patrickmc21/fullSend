import { call, put, takeLastest } from 'redux-saga/effects';
import getToken from '../api/api-calls/getToken';
import getUserId from '../api/api-calls/getUserId';
import getAthleteActivities from '../api/api-calls/getAthleteActivities';
import getTrails from '../api/api-calls/getTrails';
import * as actions from '../Actions';

export function* loginUserSaga(action) {
  try {
    const user = yield call()
  } catch (error) {

  }
}
