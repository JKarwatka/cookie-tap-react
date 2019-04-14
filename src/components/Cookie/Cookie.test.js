import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library';
import configureStore from 'redux-mock-store'; // ES6 modules
import { Provider } from 'react-redux';
import { Cookie } from './Cookie';
import { store } from '../../js/store';

export function renderWithRedux(ui, store) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

beforeEach(() => {
  cleanup();
});

describe('Cookie component', () => {
  it('should render component', () => {
    const { getByAlt, getByTestId, container, asFragment } = renderWithRedux(
      <Cookie />,
      store
    );
    expect(getByTestId('cookie')).toBeTruthy();
  });

  it('should render component', () => {
    const { getByAlt, getByTestId, container, asFragment } = renderWithRedux(
      <Cookie />,
      store
    );
    expect(getByTestId('cookie')).toBeTruthy();
  });
});
