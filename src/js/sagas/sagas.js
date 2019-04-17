import { put, select, all, delay, take, fork } from 'redux-saga/effects';
import { cookiesPerSecondSelector } from '../selectors/selectors';
import { addCookie, generateCookiesFromProducers } from '../actions/actions';
import { GENERATE_COOKIE_FROM_PRODUCERS } from '../actions/actionTypes';

const ticksPerSecond = 20;

function* addCookiesFromProducers() {
  const cookiesPerSecond = yield select(cookiesPerSecondSelector);
  yield put(addCookie(cookiesPerSecond / ticksPerSecond));
}

function* watchGenerateCookiesFromProducers() {
  while (true) {
    yield take(GENERATE_COOKIE_FROM_PRODUCERS);
    yield fork(addCookiesFromProducers);
  }
}

function* dispatchGenerateCookiesFromProducers() {
  while (true) {
    yield delay(1000 / ticksPerSecond);
    yield put(generateCookiesFromProducers());
  }
}

export default function* rootSaga() {
  yield all([
    fork(dispatchGenerateCookiesFromProducers),
    fork(watchGenerateCookiesFromProducers)
  ]);
}
