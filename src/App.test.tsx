import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Fitness Tracker Header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Fitness Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
