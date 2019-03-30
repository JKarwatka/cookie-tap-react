import { combineReducers } from 'redux';
import cookieCounterReducer from './cookieCounterReducer';
import producersReducer from './producersReducer';

const rootReducer = combineReducers({
  cookieCount: cookieCounterReducer,
  producers: producersReducer
});

export default rootReducer;
