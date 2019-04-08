import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Cookie from '../Cookie/Cookie';
import CookieCounter from '../CookieCounter/CookieCounter';
import store from '../../js/store';
import CookieProducerList from '../CookieProducerList/CookieProducerList';

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
`;
const StyledCookieSection = styled.section`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 70%;
`;

const StyledProducersSection = styled.section`
  flex: 0 0 30%;
  background-color: gainsboro;
`;

function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <StyledCookieSection>
          <CookieCounter />
          <Cookie />
        </StyledCookieSection>
        <StyledProducersSection>
          <CookieProducerList />
        </StyledProducersSection>
      </StyledApp>
    </Provider>
  );
}

export default App;
