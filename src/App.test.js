import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Page', () => {
  render(<App />);
  const Element = screen.getByText("Sean Yu");
  expect(Element).toBeInTheDocument();
});
