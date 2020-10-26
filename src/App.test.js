import { render, screen } from '@testing-library/react';
import App from './App';

test('renders feature branch link', () => {
  render(<App />);
  const linkElement = screen.getByText(/feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
