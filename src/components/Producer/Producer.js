import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProducerButton from '../BuyProducerButton/BuyProducerButton';

const StyledProducer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  padding: 1rem;
  margin-top: 2rem;
`;

const StyledButtonSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 30%;
`;

const StyledProducerTitle = styled.h2`
  flex: 0 0 30%;
  text-align: center;
`;

const StyledProducerStats = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  flex: 0 0 40%;
`;
const StyledProducerCounter = styled.p``;

function Producer(props) {
  const { producer } = { ...props };
  return (
    <StyledProducer>
      <StyledProducerTitle>{producer.name}</StyledProducerTitle>
      <StyledProducerStats>
        <StyledProducerCounter>Owned: {producer.owned}</StyledProducerCounter>
        <StyledProducerCounter>
          Cookies/s: {producer.cookiesPerSecond * producer.owned}
        </StyledProducerCounter>
      </StyledProducerStats>
      <StyledButtonSection>
        <ProducerButton producer={producer} quantityToBuy={1} />
        <ProducerButton producer={producer} quantityToBuy={10} />
      </StyledButtonSection>
    </StyledProducer>
  );
}

Producer.propTypes = {
  producer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    baseValue: PropTypes.number,
    cookiesPerSecond: PropTypes.number,
    priceIncrease: PropTypes.number,
    owned: PropTypes.number
  }).isRequired
};

export default Producer;
