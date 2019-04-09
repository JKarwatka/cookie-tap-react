import { ADD_COOKIE, REMOVE_COOKIE } from '../actions/actionTypes';

const initialState = 0;

function cookieCounterReducer(prevState = initialState, action) {
  switch (action.type) {
    case ADD_COOKIE: {
      return prevState + action.payload;
    }
    case REMOVE_COOKIE: {
      return prevState - action.payload;
    }
    default: {
      return prevState;
    }
  }
}
export default cookieCounterReducer;
