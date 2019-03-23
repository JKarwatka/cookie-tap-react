import React from 'react';
import styled from 'styled-components';
import Cookie from '../Cookie/Cookie';

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledApp>
      <Cookie />
    </StyledApp>
  );
}

export default App;
