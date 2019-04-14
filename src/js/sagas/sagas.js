import {
  put,
  select,
  all,
  delay,
  take,
  fork,
  takeEvery,
  call
} from 'redux-saga/effects';
import { cookiesPerSecondSelector } from '../selectors/selectors';
import { addCookie, generateCookiesFromProducers } from '../actions/actions';
import { GENERATE_COOKIE_FROM_PRODUCERS } from '../actions/actionTypes';

function* addCookiesFromProducers() {
  const cookiesPerSecond = yield select(cookiesPerSecondSelector);
  yield put(addCookie(cookiesPerSecond / 20));
}

function* watchGenerateCookiesFromProducers() {
  while (true) {
    yield take(GENERATE_COOKIE_FROM_PRODUCERS);
    yield fork(addCookiesFromProducers);
  }
}

function* dispatchGenerateCookiesFromProducers() {
  while (true) {
    yield delay(50);
    yield put(generateCookiesFromProducers());
  }
}

function* dispatchSaveState() {
  while (true) {
    yield delay(50);
    yield put(generateCookiesFromProducers());
  }
}

export default function* rootSaga() {
  yield all([
    fork(dispatchGenerateCookiesFromProducers),
    fork(watchGenerateCookiesFromProducers)
  ]);
}
