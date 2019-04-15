import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProducerButton from '../BuyProducerButton/BuyProducerButton';

const StyledProducer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  border-bottom: solid 0.1rem rgba(0, 0, 0, 0.2);

  &:nth-child(2) {
    border-top: solid 0.11rem rgba(0, 0, 0, 0.2);
  }
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
