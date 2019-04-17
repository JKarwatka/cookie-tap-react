import { createSelector } from 'reselect';
import getCurrentPriceFromProducer from '../utils';

const producersSelector = state => state.producers;

const cookieCountSelector = state => state.cookieCount;

const timestampSelector = state => state.timestamp;

const producerSelector = (state, props) =>
  state.producers.find(producer => producer.id === props.producer.id);

const getQuantitySelector = (_, props) => props.quantityToBuy;

export const cookiesPerSecondSelector = createSelector(
  producersSelector,
  producers =>
    producers.reduce((currentCookiesPerSecond, producer) => {
      return (
        currentCookiesPerSecond + producer.cookiesPerSecond * producer.owned
      );
    }, 0)
);

export const producerPriceSelector = createSelector(
  [producerSelector, getQuantitySelector],
  (producer, quantityToBuy) =>
    getCurrentPriceFromProducer(producer, quantityToBuy)
);

export const isBuyableSelector = createSelector(
  [cookieCountSelector, producerPriceSelector],
  (cookieCount, producerPrice) => cookieCount >= producerPrice
);

export const cookieIdleCountSelector = createSelector(
  [cookiesPerSecondSelector, timestampSelector],
  (cookiesPerSecond, timestamp) => {
    const idleTimeInSeconds = (Date.now().valueOf() - timestamp) / 1000;
    return cookiesPerSecond * idleTimeInSeconds;
  }
);
