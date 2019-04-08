export default function getCurrentPriceFromProducer(producer, quantityBought) {
  return Math.ceil(
    (producer.baseValue *
      (1.15 ** (producer.owned + quantityBought) - 1.15 ** producer.owned)) /
      0.15
  );
}
