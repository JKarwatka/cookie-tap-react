import { combineReducers } from 'redux';
import cookieCounterReducer from './cookieCounterReducer';
import producersReducer from './producersReducer';
import timestampReducer from './timestampReducer';

const rootReducer = combineReducers({
  cookieCount: cookieCounterReducer,
  producers: producersReducer,
  timestamp: timestampReducer
});

export default rootReducer;
