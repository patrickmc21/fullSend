import { call, put, takeLastest } from 'redux-saga/effects';
import getToken from '../api/external-api-calls/getToken';
import getUserId from '../api/internal-api-calls/getUserId';
import getAthleteActivities from '../api/external-api-calls/getAthleteActivities';
import getTrails from '../api/external-api-calls/getTrails';
import * as actions from '../Actions';

export function* loginUserSaga(action) {
  try {
    const user = yield call()
  } catch (error) {

  }
}
