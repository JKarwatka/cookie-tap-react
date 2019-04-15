import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import Cookie from '../Cookie/Cookie';
import CookieCounter from '../CookieCounter/CookieCounter';
import { store } from '../../js/store';
import CookieProducerList from '../ProducerList/ProducerList';

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: #ffcc7a;
  color: #333;
  font-family: 'Rubik', sans-serif;
`;
const StyledCookieSection = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 50vh;
  max-height: 100vh;
  align-self: flex-start;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 60%;
`;

const StyledProducersSection = styled.section`
  flex: 0 0 40%;
  background-color: #77aedf;
`;

function App() {
  return (
    <>
      <Normalize />
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
    </>
  );
}

export default App;
