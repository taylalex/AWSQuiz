import {
  findByText, render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React, { memo } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import ScoreScreen from '../screens/ScoreScreen';

jest.mock('axios');

const dummyScore = 1234;

const dummyScoreData = {
  data: {
    score: dummyScore,
  },
};

function memoryRouterSetup() {
  axios.post.mockResolvedValueOnce(dummyScoreData);

  const routes = [{
    path: '/score',
    element: <ScoreScreen userAnswers="test" />,
  },
  {
    path: '/',
    element: <p>Dummy home page</p>,
  }];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/score'],
    initialIndex: 0,
  });

  act(() => {
    render(
      <RouterProvider router={router} />,
    );
  });
}

describe('Score screen', () => {
  it('should render score text', async () => {
    memoryRouterSetup();
    const scoreText = await screen.findByText(`You Scored:${dummyScore}!`);
    expect(scoreText).toBeInTheDocument();
  });

  it('should render restart button group', async () => {
    memoryRouterSetup();
    const restartButton = await screen.findByTestId('restart-button');
    expect(restartButton).toBeInTheDocument();
  });

  describe('Restart button', () => {
    it('should render with \'Restart\' label', async () => {
      memoryRouterSetup();
      const restartButton = await screen.findByTestId('restart-button');
      expect(restartButton.firstChild.innerHTML).toContain('Restart');
    });

    it('should change path to / when clicked', async () => {
      memoryRouterSetup();
      const restartButton = await screen.findByTestId('restart-button');

      act(() => {
        userEvent.click(restartButton.firstChild);
      });

      const homePageText = screen.getByText('Dummy home page');

      expect(homePageText).toBeInTheDocument();
    });
  });
});
