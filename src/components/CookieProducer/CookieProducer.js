import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProducerButton from '../BuyProducerButton/BuyProducerButton';

const StyledProducer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border: 2px solid black;
  margin-top: 2rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 30%;
`;

const StyledProducerTitle = styled.h2`
  flex: 0 0 70%;
  text-align: center;
`;

function CookieProducer(props) {
  const { producer } = { ...props };
  return (
    <StyledProducer>
      <StyledProducerTitle>{producer.name}</StyledProducerTitle>
      <StyledButtonContainer>
        <ProducerButton producer={producer} quantityToBuy={1} />
        <ProducerButton producer={producer} quantityToBuy={10} />
      </StyledButtonContainer>
    </StyledProducer>
  );
}

CookieProducer.propTypes = {
  producer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    baseValue: PropTypes.number,
    cookiesPerSecond: PropTypes.number,
    priceIncrease: PropTypes.number,
    owned: PropTypes.number
  }).isRequired
};

export default CookieProducer;
