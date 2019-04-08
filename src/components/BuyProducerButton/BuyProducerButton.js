import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyProducer, removeCookie } from '../../js/actions/actions';
import getCurrentPriceFromProducer from '../../js/utils';

const StyledButton = styled.button`
  width: 4rem;
  padding: 1rem;
`;

function BuyProducerButton(props) {
  const { handleClick, producer, quantityToBuy } = { ...props };
  return (
    <StyledButton onClick={() => handleClick(producer.id, quantityToBuy)}>
      x{quantityToBuy} {getCurrentPriceFromProducer(producer, quantityToBuy)}
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

const mapStatetoProps = state => {
  return {
    cookieCount: state.cookieCount
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(BuyProducerButton);
