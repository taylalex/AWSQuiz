import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import QuizScreen from '../screens/QuizScreen';

// Mocks
jest.mock('axios');

const firstQuestionDummyAnswers = ['firstQuestion1', 'firstQuestion2', 'firstQuestion3', 'firstQuestion4'];

const secondQuestionDummyAnswers = ['secondQuestion1', 'secondQuestion2', 'secondQuestion4', 'secondQuestion5'];

const firstQuestionDummyData = {
  _id: 'testId',
  answers: firstQuestionDummyAnswers,
  image: 'testImage',
};

const secondQuestionDummyData = {
  _id: 'testId',
  answers: secondQuestionDummyAnswers,
  image: 'testImage',
};

const dummyQuestionData = {
  data: {
    collections: [firstQuestionDummyData, secondQuestionDummyData],
  },
};

function memoryRouterSetup() {
  axios.get.mockResolvedValueOnce(dummyQuestionData);
  act(() => {
    render(
      <MemoryRouter>
        <QuizScreen />
      </MemoryRouter>,
    );
  });
}

function expectButtonsToContainAnswers(buttons, answers) {
  const [
    firstAnswerButton,
    secondAnswerButton,
    thirdAnswerButton,
    fourthAnswerButton,
  ] = buttons;

  expect(firstAnswerButton.innerHTML).toContain(answers[0]);
  expect(secondAnswerButton.innerHTML).toContain(answers[1]);
  expect(thirdAnswerButton.innerHTML).toContain(answers[2]);
  expect(fourthAnswerButton.innerHTML).toContain(answers[3]);
}

describe('Quiz screen', () => {
  it('should render service image', async () => {
    memoryRouterSetup();
    const serviceImage = await waitFor(() => screen.getByTestId('service-image'));
    expect(serviceImage).toBeTruthy();
  });

  describe('Quiz buttons', () => {
    it('should render quiz button group', async () => {
      memoryRouterSetup();
      const quizButtons = await waitFor(() => screen.getByTestId('quiz-buttons'));
      expect(quizButtons).toBeTruthy();
    });

    it('should render all quiz buttons', async () => {
      memoryRouterSetup();
      const quizButtons = await waitFor(() => screen.getByTestId('quiz-buttons'));

      expectButtonsToContainAnswers(quizButtons.children, firstQuestionDummyAnswers);
    });

    it('should change question when first answer button clicked', async () => {
      memoryRouterSetup();
      const quizButtons = await waitFor(() => screen.getByTestId('quiz-buttons'));

      const firstAnswerButton = quizButtons.firstChild;

      act(() => {
        userEvent.click(firstAnswerButton);
      });

      expectButtonsToContainAnswers(quizButtons.children, secondQuestionDummyAnswers);
    });

    it('should change question when second answer button clicked', async () => {
      memoryRouterSetup();
      const quizButtons = await waitFor(() => screen.getByTestId('quiz-buttons'));

      const secondAnswerButton = quizButtons.children[1];

      act(() => {
        userEvent.click(secondAnswerButton);
      });

      expectButtonsToContainAnswers(quizButtons.children, secondQuestionDummyAnswers);
    });

    it('should change question when third answer button clicked', async () => {
      memoryRouterSetup();
      const quizButtons = await waitFor(() => screen.getByTestId('quiz-buttons'));

      const thirdAnswerButton = quizButtons.children[2];

      act(() => {
        userEvent.click(thirdAnswerButton);
      });

      expectButtonsToContainAnswers(quizButtons.children, secondQuestionDummyAnswers);
    });

    it('should change question when fourth answer button clicked', async () => {
      memoryRouterSetup();
      const quizButtons = await waitFor(() => screen.getByTestId('quiz-buttons'));

      const fourthAnswerButton = quizButtons.children[3];

      act(() => {
        userEvent.click(fourthAnswerButton);
      });

      expectButtonsToContainAnswers(quizButtons.children, secondQuestionDummyAnswers);
    });
  });
});
