import {
  ADD_COOKIE,
  BUY_UPGRADE,
  BUY_PRODUCER,
  REMOVE_COOKIE,
  GENERATE_COOKIE_FROM_PRODUCERS,
  SAVE_STATE,
  LOAD_STATE
} from './actionTypes';

export function addCookie(quantity) {
  return { type: ADD_COOKIE, payload: quantity };
}
export function removeCookie(quantity) {
  return { type: REMOVE_COOKIE, payload: quantity };
}

export function buyProducer(producerId, quantity) {
  return { type: BUY_PRODUCER, producerId, payload: quantity };
}

export function generateCookiesFromProducers() {
  return { type: GENERATE_COOKIE_FROM_PRODUCERS };
}

export function saveState(state) {
  return { type: SAVE_STATE, payload: state };
}
export function loadState(state) {
  return { type: LOAD_STATE, payload: state };
}
