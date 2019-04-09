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
  padding: 1rem;
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
    <StyledButton
      disabled={!isBuyable}
      onClick={() =>
        handleClick(producer.id, quantityToBuy, currentProducerPrice)
      }
    >
      x{quantityToBuy} {currentProducerPrice}
    </StyledButton>
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
