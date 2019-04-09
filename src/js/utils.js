export default function getCurrentPriceFromProducer(producer, quantityBought) {
  return Math.ceil(
    (producer.baseValue *
      ((1 + producer.priceIncrease) ** (producer.owned + quantityBought) -
        (1 + producer.priceIncrease) ** producer.owned)) /
      producer.priceIncrease
  );
}
