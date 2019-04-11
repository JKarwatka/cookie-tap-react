import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyProducer, removeCookie } from '../../js/actions/actions';
import {
  producerPriceSelector,
  isBuyableSelector
} from '../../js/selectors/selectors';

const StyledButton = styled.button`
  width: 4rem;
  padding: 0.5rem;
`;

const StyledPriceTag = styled.p``;

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
