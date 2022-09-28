/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../App.css';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import getUserScore from '../pageFunctionality/apiCalls';
// const ;

const image = require('../AWSQuiz-logo.png');

function ScoreScreen({ userAnswers }) {
  const [score, setScore] = useState(-1);
  getUserScore({ userAnswers, setScore });
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FF9900',
      },
      secondary: {
        main: '#FF9900',
      },
    },
  });

  // const navigate = useNavigate();
  const routeChange = (path) => { useNavigate(`${path}`); };

  return (
    <div className="App">
      <img src={image} alt="logo" style={{ height: '12rem', width: '38rem', margin: '3rem' }} />
      <p className="Question">
        You Scored:
        {score}
        !
      </p>
      <Button theme={theme} color="primary" varient="contained" sx={{ color: '#252F3E' }} onClick={() => { routeChange('/'); }}>Restart</Button>

    </div>
  );
}

export default ScoreScreen;
