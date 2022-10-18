/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ButtonGroup } from '@mui/material';

import StyledButton from '../components/StyledButton';
import { getEasyQuestions, postUserAnswers } from '../functionality/quizApi';

function QuizScreen() {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);

  const routeChange = (path) => {
    navigate(`${path}`);
  };

  useEffect(() => {
    getEasyQuestions(setQuestions);
  }, []);

  function answerClicked(answerIndex) {
    setAnswersArray(() => {
      const newAnswersArray = answersArray;
      newAnswersArray.push({
        _id: questions[questionIndex]._id,
        answer: questions[questionIndex].answers[answerIndex],
      });

      return newAnswersArray;
    });
    setQuestionIndex(questionIndex + 1);

    if (questionIndex === questions.length - 1) {
      postUserAnswers(answersArray, sessionId);
      routeChange(`/score/${sessionId}`);
    }
  }

  return (
    questions.length === 0 ? ''
      : (
        <>
          <ServiceImage image={questions[questionIndex].image} />
          <ButtonGroup data-testid="quiz-buttons" varient="text">
            <StyledButton
              label={questions[questionIndex].answers[0]}
              onClick={() => answerClicked(0)}
            />
            <StyledButton
              label={questions[questionIndex].answers[1]}
              onClick={() => answerClicked(1)}
            />
            <StyledButton
              label={questions[questionIndex].answers[2]}
              onClick={() => answerClicked(2)}
            />
            <StyledButton
              label={questions[questionIndex].answers[3]}
              onClick={() => answerClicked(3)}
            />
          </ButtonGroup>
        </>
      )
  );
}

function ServiceImage({ image }) {
  return (
    <div
      data-testid="service-image"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        marginBottom: '3em',
        width: '25em',
        height: '25em',
      }}
    />
  );
}

export default QuizScreen;
