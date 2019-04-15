import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyProducer, removeCookie } from '../../js/actions/actions';
import {
  producerPriceSelector,
  isBuyableSelector
} from '../../js/selectors/selectors';

import cookieImg from '../../assets/cookie.svg';

const StyledButton = styled.button`
  padding: 0;
  border: none;
  color: #333;
  background-color: #d6a351;
  font-weight: bold;
  font-size: 1rem;
  border: solid 1px transparent;
  border-radius: 4px;
  width: 6rem;
  padding: 1rem;

  &:disabled {
    background-color: #bbb;
    color: #555;
  }
`;

const StyledPriceTag = styled.p`
  font-weight: bold;
  position: relative;

  &::before {
    content: '';
    /* position: absolute;
    left: 0;
    top: 50%; */
    width: 4rem;
    transform: translate(0, -50%);
    /* background-image: url(${cookieImg}); */
    background-color: red;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

function BuyProducerButton(props) {
  const {
    handleClick,
    producer,
    quantityToBuy,
    currentProducerPrice,
    isBuyable
  } = {
    ...props
  };
  return (
    <StyledContainer>
      <StyledButton
        disabled={!isBuyable}
        onClick={() =>
          handleClick(producer.id, quantityToBuy, currentProducerPrice)
        }
      >
        Buy x{quantityToBuy}
      </StyledButton>
      <StyledPriceTag>{currentProducerPrice}</StyledPriceTag>
    </StyledContainer>
  );
}

BuyProducerButton.propTypes = {
  isBuyable: PropTypes.bool.isRequired,
  cookieCount: PropTypes.number.isRequired,
  quantityToBuy: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  producer: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    baseValue: PropTypes.number,
    cookiesPerSecond: PropTypes.number,
    priceIncrease: PropTypes.number,
    owned: PropTypes.number
  }).isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (producerId, quantityToBuy, currentProducerPrice) => {
      dispatch(buyProducer(producerId, quantityToBuy));
      dispatch(removeCookie(currentProducerPrice));
    }
  };
};

const mapStateToProps = (state, props) => {
  return {
    currentProducerPrice: producerPriceSelector(state, props),
    cookieCount: state.cookieCount,
    isBuyable: isBuyableSelector(state, props)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyProducerButton);
