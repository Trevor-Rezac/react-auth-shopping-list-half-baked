import { render, screen } from '@testing-library/react';

import ListItemForm from './ListItemForm';

test('renders learn react link', () => {
  render(<ListItemForm />);
  const linkElement = screen.getByText(/I need/i);
  expect(linkElement).toBeInTheDocument();
});
