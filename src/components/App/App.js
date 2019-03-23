import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Cookie from '../Cookie/Cookie';
import CookieCounter from '../CookieCounter/CookieCounter';
import store from '../../js/store';

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <CookieCounter />
        <Cookie />
      </StyledApp>
    </Provider>
  );
}

export default App;
