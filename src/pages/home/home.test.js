import { render, screen } from '@testing-library/react';
import Home from './index';

test('renders Home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
