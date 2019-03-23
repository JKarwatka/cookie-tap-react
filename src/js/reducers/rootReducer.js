import { combineReducers } from 'redux';
import cookieCounterReducer from './cookieCounterReducer';

const rootReducer = combineReducers({
  cookieCount: cookieCounterReducer
});

export default rootReducer;
