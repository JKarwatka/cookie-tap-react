import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { buyProducer } from '../../js/actions/actions';

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

const StyledButton = styled.button`
  width: 4rem;
  padding: 1rem;
`;
const StyledProducerTitle = styled.h2`
  flex: 0 0 70%;
  text-align: center;
`;

function CookieProducer(props) {
  const { handleClick, element } = { ...props };
  return (
    <StyledProducer>
      <StyledProducerTitle>{element.name}</StyledProducerTitle>
      <StyledButtonContainer>
        <StyledButton onClick={() => handleClick(element.id, 1)}>
          x1
        </StyledButton>
        <StyledButton onClick={() => handleClick(element.id, 10)}>
          x10
        </StyledButton>
      </StyledButtonContainer>
    </StyledProducer>
  );
}

CookieProducer.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    baseValue: PropTypes.number,
    cookiesPerSecond: PropTypes.number,
    priceIncrease: PropTypes.number,
    owned: PropTypes.number
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (id, quantity) => dispatch(buyProducer(id, quantity))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CookieProducer);
