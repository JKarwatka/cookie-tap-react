import { ADD_COOKIE, BUY_UPGRADE } from '../action-types';

export function addCookie(payload) {
  return { type: ADD_COOKIE, payload };
}

export function buyUpgrade(payload) {
  return { type: BUY_UPGRADE, payload };
}
