import { BUY_PRODUCER } from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    name: 'Cursor',
    baseValue: 1,
    cookiesPerSecond: 5,
    priceIncrease: 0.15,
    owned: 0
  },
  {
    id: 2,
    name: 'Grandma',
    baseValue: 100,
    cookiesPerSecond: 1,
    priceIncrease: 0.15,
    owned: 0
  },
  {
    id: 3,
    name: 'Farm',
    baseValue: 1100,
    cookiesPerSecond: 8,
    priceIncrease: 0.15,
    owned: 0
  },
  {
    id: 4,
    name: 'Mine',
    baseValue: 12000,
    cookiesPerSecond: 47,
    priceIncrease: 0.15,
    owned: 0
  },
  {
    id: 5,
    name: 'Factory',
    baseValue: 130000,
    cookiesPerSecond: 260,
    priceIncrease: 0.15,
    owned: 0
  },
  {
    id: 6,
    name: 'Bank',
    baseValue: 1400000,
    cookiesPerSecond: 260,
    priceIncrease: 0.15,
    owned: 0
  }
];
function producersReducer(prevState = initialState, action) {
  switch (action.type) {
    case BUY_PRODUCER: {
      const newState = prevState.map(producer => {
        if (producer.id === action.producerId) {
          const { owned } = producer;
          const quantityBought = action.payload;
          return { ...producer, owned: owned + quantityBought };
        }
        return producer;
      });
      return newState;
    }
    default: {
      return prevState;
    }
  }
}
export default producersReducer;
