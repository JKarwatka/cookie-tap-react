import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { cookiesPerSecondSelector } from '../../js/selectors/selectors';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
function CookieCounter({ cookieCount, cookiesPerSecond }) {
  return (
    <StyledContainer>
      <h2>{cookieCount.toFixed()} cookies</h2>
      <p>Cookies per second: {cookiesPerSecond.toFixed(1)}</p>
    </StyledContainer>
  );
}

CookieCounter.propTypes = {
  cookieCount: PropTypes.number.isRequired,
  cookiesPerSecond: PropTypes.number.isRequired
};
const mapStateToProps = state => {
  return {
    cookieCount: state.cookieCount,
    cookiesPerSecond: cookiesPerSecondSelector(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(CookieCounter);
