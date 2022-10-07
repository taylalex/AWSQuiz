import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';

describe('Not found screen', () => {
  beforeEach(() => {
    render(
      <NotFoundScreen />,
    );
  });

  it('renders \'404 Not Found\' image', () => {
    const notFoundImage = screen.getByTestId('not-found-image');
    expect(notFoundImage).toBeInTheDocument();
  });
});
