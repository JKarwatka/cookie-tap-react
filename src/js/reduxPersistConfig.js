import storage from 'redux-persist/lib/storage';
import transform from './reduxPersistTransforms';

const persistConfig = {
  key: 'root',
  storage,
  throttle: 30000,
  transforms: [transform]
};

export default persistConfig;
