/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { ButtonGroup } from '@mui/material';

import StyledButton from '../components/StyledButton';
import { getEasyQuestions } from '../functionality/quizApi';

const answersArray = [];
function QuizScreen() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    getEasyQuestions(setQuestions);
  }, []);

  function answerClicked(answerIndex) {
    answersArray.push({
      _id: questions[questionIndex]._id,
      answer: questions[questionIndex].answers[answerIndex],
    });
    setQuestionIndex(questionIndex + 1);
  }

  return (
    questions.length === 0 ? ''
      : (
        <>
          <ServiceImage image={questions[questionIndex].image} />
          <ButtonGroup varient="text">
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
    <div style={{
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
