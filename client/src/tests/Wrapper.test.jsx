import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Wrapper from '../components/Wrapper';

describe('Wrapper component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Wrapper />
      </MemoryRouter>,
    );
  });

  it('renders the AWS quiz logo', () => {
    const logo = screen.getByTestId('aws-quiz-logo');
    // Check that logo exists
    expect(logo).toBeTruthy();
  });

  it('has link to home', async () => {
    const link = screen.getByTestId('home-link');
    // Check that link exists
    expect(link).toBeTruthy();
  });
});
