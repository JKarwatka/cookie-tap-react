import {
  ADD_COOKIE,
  BUY_UPGRADE,
  BUY_PRODUCER,
  REMOVE_COOKIE
} from './actionTypes';

export function addCookie(payload) {
  return { type: ADD_COOKIE, payload };
}
export function removeCookie(payload) {
  return { type: REMOVE_COOKIE, payload };
}

export function buyUpgrade(payload) {
  return { type: BUY_UPGRADE, payload };
}

export function buyProducer(producerId, payload) {
  return { type: BUY_PRODUCER, producerId, payload };
}
