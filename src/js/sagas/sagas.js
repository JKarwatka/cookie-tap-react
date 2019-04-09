import { put, select, all, delay } from 'redux-saga/effects';
import { cookiesPerSecondSelector } from '../selectors/selectors';
import { addCookie } from '../actions/actions';

function* addCookiesFromProducers() {
  while (true) {
    yield delay(10);
    const cookiesPerSecond = yield select(cookiesPerSecondSelector);
    yield put(addCookie(cookiesPerSecond / 100));
  }
}

export default function* rootSaga() {
  yield all([addCookiesFromProducers()]);
}
