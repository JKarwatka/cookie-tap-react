export default function getCurrentPriceFromProducer(producer, quantityBought) {
  return Math.ceil(
    (producer.baseValue *
      ((1 + producer.priceIncrease) ** (producer.owned + quantityBought) -
        (1 + producer.priceIncrease) ** producer.owned)) /
      producer.priceIncrease
  );
}

const stateStorageKey = 'cookie-tap-state';

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateStorageKey, serializedState);
  } catch (e) {
    console.log(e);
  }
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem(stateStorageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}
