import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1400px;
`;

const StyledCookie = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(0.95);
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default function Cookie() {
  return (
    <StyledContainer>
      <StyledCookie src={`${process.env.PUBLIC_URL}/cookie.svg`} alt="" />
    </StyledContainer>
  );
}
