import { createSelector } from 'reselect';

const producersSelector = state => state.producers;

const producerSelector = (state, props) => state.producers[props.producer.id];

export const cookiesPerSecondSelector = createSelector(
  producersSelector,
  producers =>
    producers.reduce(
      (currentCookiesPerSecond, producer) => {
        return (
          currentCookiesPerSecond + producer.cookiesPerSecond * producer.owned
        );
      },

      0
    )
);

// export const producerPriceSelector = createSelector(
//   producerSelector,
//   producer => producer.owned * producer.baseValue
// );
