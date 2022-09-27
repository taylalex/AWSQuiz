import React from 'react';
import '../App.css';
import { ButtonGroup, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const image = require('../AWSQuiz-logo.png');

function HomeScreen() {
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

  const navigate = useNavigate();
  const routeChange = (path) => { navigate(`${path}`); };

  return (
    <div className="App">
      <img src={image} alt="logo" style={{ height: '12rem', width: '38rem', margin: '3rem' }} />
      <p className="Question">Welcome to the AWS Quiz!</p>
      <p>You will be given the logo of multiple AWS services, can you name them all?</p>
      <ButtonGroup varient="text">
        <Button theme={theme} color="primary" varient="contained" sx={{ color: '#252F3E' }} onClick={() => routeChange('quiz')}>Easy</Button>
        <Button theme={theme} color="primary" varient="contained" sx={{ color: '#252F3E' }} disabled>Medium 2</Button>
        <Button theme={theme} color="primary" varient="contained" sx={{ color: '#252F3E' }} disabled>Hard 3</Button>
      </ButtonGroup>
    </div>
  );
}

export default HomeScreen;
