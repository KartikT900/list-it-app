import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'components/App';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);

    expect(
      screen.getByRole('button', { name: 'Login' })
    ).toBeInTheDocument();
  });
});
