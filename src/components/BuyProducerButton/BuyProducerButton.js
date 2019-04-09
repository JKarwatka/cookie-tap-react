import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyProducer, removeCookie } from '../../js/actions/actions';
import { producerPriceSelector } from '../../js/selectors/selectors';

const StyledButton = styled.button`
  width: 4rem;
  padding: 1rem;
`;

function BuyProducerButton(props) {
  const { handleClick, producer, quantityToBuy, currentProducerPrice } = {
    ...props
  };
  return (
    <StyledButton onClick={() => handleClick(producer.id, quantityToBuy)}>
      x{quantityToBuy} {currentProducerPrice}
    </StyledButton>
  );
}

BuyProducerButton.propTypes = {
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
    handleClick: (id, quantity) => {
      dispatch(buyProducer(id, quantity));
      dispatch(removeCookie());
    }
  };
};

const mapStatetoProps = (state, props) => {
  return {
    currentProducerPrice: producerPriceSelector(state, props),
    cookieCount: state.cookieCount
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(BuyProducerButton);
