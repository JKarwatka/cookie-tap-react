import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';
import App from './App';
import { store } from '../../js/store';

function renderWithRedux(ui, store) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe('App component', () => {
  it('should render without crashing', () => {
    const { getByText, getByTestId, container, asFragment } = renderWithRedux(
      <App />,
      store
    );
    expect(container.firstChild).toBeTruthy();
  });
});
