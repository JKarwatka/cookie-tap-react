import * as actions from './actions';
import * as types from './actionTypes';

describe('actions', () => {
  describe('addCookie()', () => {
    it('should create an action to add 1 cookie', () => {
      const payload = 1;
      const expectedAction = {
        type: types.ADD_COOKIE,
        payload
      };
      expect(actions.addCookie(payload)).toEqual(expectedAction);
    });

    it('should create an action to add 10 cookies', () => {
      const payload = 10;
      const expectedAction = {
        type: types.ADD_COOKIE,
        payload
      };
      expect(actions.addCookie(payload)).toEqual(expectedAction);
    });
  });
  describe('removeCookie()', () => {
    it('should create an action to remove 1 cookie', () => {
      const payload = 1;
      const expectedAction = {
        type: types.REMOVE_COOKIE,
        payload
      };
      expect(actions.removeCookie(payload)).toEqual(expectedAction);
    });
    it('should create an action to remove 10 cookies', () => {
      const payload = 10;
      const expectedAction = {
        type: types.REMOVE_COOKIE,
        payload
      };
      expect(actions.removeCookie(payload)).toEqual(expectedAction);
    });
  });
  describe('buyProducer()', () => {
    it('should create an action to buy 1 producer with id 1', () => {
      const payload = 1;
      const producerId = 1;
      const expectedAction = {
        type: types.BUY_PRODUCER,
        payload,
        producerId
      };
      expect(actions.buyProducer(producerId, payload)).toEqual(expectedAction);
    });
    it('should create an action to buy 10 producers with id 1', () => {
      const payload = 10;
      const producerId = 1;
      const expectedAction = {
        type: types.BUY_PRODUCER,
        producerId,
        payload
      };
      expect(actions.buyProducer(producerId, payload)).toEqual(expectedAction);
    });
  });
});
