import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';

function memoryRouterSetup() {
  const routes = [{
    path: '/quiz',
    element: <p>Dummy quiz page</p>,
  },
  {
    path: '/',
    element: <HomeScreen />,
  }];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
  });

  render(
    <RouterProvider router={router} />,
  );
}

describe('Home screen', () => {
  beforeEach(memoryRouterSetup);

  it('should render welcome text', () => {
    const welcomeText = screen.getByTestId('welcome-text');
    expect(welcomeText.innerHTML).toEqual('Welcome to the AWS Quiz!');
  });

  it('should render information text', () => {
    const infoText = screen.getByTestId('info-text');
    expect(infoText.innerHTML).toEqual('You will be given the logo of multiple AWS services, can you name them all?');
  });

  it('should render menu button group', () => {
    const menuButtons = screen.getByTestId('menu-buttons');
    expect(menuButtons).toBeTruthy();
  });

  describe('Easy button', () => {
    it('should render with \'Easy\' label', () => {
      const menuButtons = screen.getByTestId('menu-buttons');
      const easyButton = menuButtons.children[0];
      expect(easyButton.innerHTML).toContain('Easy');
    });

    it('should change path to /quiz when clicked', () => {
      const menuButtons = screen.getByTestId('menu-buttons');
      const easyButton = menuButtons.children[0];
      userEvent.click(easyButton);
      const quizPageText = screen.getByText('Dummy quiz page');
      expect(quizPageText).toBeTruthy();
    });
  });

  describe('Medium button', () => {
    it('should render with \'Medium\' label', () => {
      const menuButtons = screen.getByTestId('menu-buttons');
      const mediumButton = menuButtons.children[1];
      expect(mediumButton.innerHTML).toContain('Medium');
    });
  });

  describe('Hard button', () => {
    it('should render with \'Hard\' label', () => {
      const menuButtons = screen.getByTestId('menu-buttons');
      const hardButton = menuButtons.children[2];
      expect(hardButton.innerHTML).toContain('Hard');
    });
  });
});
