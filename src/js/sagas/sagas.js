import { put, select, all, delay, take, fork } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import {
  cookiesPerSecondSelector,
  cookieIdleCountSelector
} from '../selectors/selectors';
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

function* generateCookiesForIdleTime() {
  const cookiesGeneratedInIdleTime = yield select(cookieIdleCountSelector);
  yield put(addCookie(cookiesGeneratedInIdleTime));
}

function* watchStateRehydrate() {
  while (true) {
    yield take(REHYDRATE);
    yield fork(generateCookiesForIdleTime);
  }
}

export default function* rootSaga() {
  yield all([
    fork(dispatchGenerateCookiesFromProducers),
    fork(watchGenerateCookiesFromProducers),
    fork(watchStateRehydrate)
  ]);
}
