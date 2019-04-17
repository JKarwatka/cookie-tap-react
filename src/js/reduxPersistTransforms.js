import { createTransform } from 'redux-persist';

export const transform = createTransform(
  () => {
    const t = Date.now().valueOf();
    // convert mySet to an Array.
    return t;
  },
  state => state,
  { whitelist: 'timestamp' }
);

export default transform;
