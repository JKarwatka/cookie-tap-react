import {
  ADD_COOKIE,
  BUY_UPGRADE,
  BUY_PRODUCER,
  REMOVE_COOKIE
} from './action-types';

export function addCookie(payload) {
  return { type: ADD_COOKIE, payload };
}
export function removeCookie(payload) {
  return { type: REMOVE_COOKIE, payload };
}

export function buyUpgrade(payload) {
  return { type: BUY_UPGRADE, payload };
}

export function buyProducer(id, payload) {
  return { type: BUY_PRODUCER, id, payload };
}
