/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ButtonGroup } from '@mui/material';
import { getScore } from '../functionality/quizApi';
import StyledButton from '../components/StyledButton';

function ScoreScreen() {
  const { sessionId } = useParams();
  const [score, setScore] = useState(-1);

  useEffect(() => {
    getScore(setScore, sessionId);
  }, []);

  return (
    <>
      <p data-testid="score-text" className="Question">
        You Scored:
        {score}
        !
      </p>
      <RestartButton />
    </>
  );
}

function RestartButton() {
  const navigate = useNavigate();

  const routeChange = (path) => {
    navigate(`${path}`);
  };

  return (
    <ButtonGroup data-testid="restart-button" varient="text">
      <StyledButton label="Restart" onClick={() => routeChange('/')} />
    </ButtonGroup>
  );
}

export default ScoreScreen;
