import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCookie } from '../../js/actions/actions';

import cookieImg from '../../assets/cookie.svg';

const StyledContainer = styled.div`
  max-width: 1400px;
`;

const StyledCookie = styled.img`
  min-width: 15rem;
  width: 100%;
  height: 100%;
  transform: scale(0.95);
  transition: transform 0.15s ease-in;

  &:hover {
    transform: scale(1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export function Cookie(props) {
  const { handleClick } = props;
  return (
    <StyledContainer>
      <StyledCookie
        data-testid="cookie"
        src={cookieImg}
        alt="cookie"
        onClick={handleClick}
      />
    </StyledContainer>
  );
}

Cookie.propTypes = {
  handleClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(addCookie(1))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cookie);
