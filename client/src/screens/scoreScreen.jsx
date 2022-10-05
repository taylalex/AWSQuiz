/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserScore } from '../functionality/quizApi';
import StyledButton from '../components/StyledButton';

function ScoreScreen({ userAnswers }) {
  const [score, setScore] = useState(-1);

  useEffect(() => {
    getUserScore({ userAnswers, setScore });
  }, []);

  const routeChange = (path) => { useNavigate(`${path}`); };

  return (
    <>
      <p className="Question">
        You Scored:
        {score}
        !
      </p>
      <StyledButton label="Restart" onClick={() => { routeChange('/'); }} />
    </>
  );
}

export default ScoreScreen;
