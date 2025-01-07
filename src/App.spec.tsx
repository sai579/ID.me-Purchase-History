import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders App', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeTruthy();
});