import React from 'react'
import '../App.css';
// import Button from '@mui/material/Button';
import { ButtonGroup, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const QuizScreen = () => {
  const theme = createTheme({
    palette:{
      primary:{
        main:'#FF9900',
      },
      secondary:{
        main:'#FF9900',
      }
    }
  })
  const image = require('../AWSQuiz-logo.png')
  return (
    <div className="App">
      <img src={image} alt={`logo`} style={{height:'12rem', width:'38rem', margin:'3rem'}}/>
      <p className="Question">Space For Question</p>
      <ButtonGroup varient="text">
        <Button theme={theme} color="primary" varient="contained" sx={{color:'#252F3E'}}>ANSWER 1</Button>
        <Button theme={theme} color="primary" varient="contained" sx={{color:'#252F3E'}}>ANSWER 2</Button>
        <Button theme={theme} color="primary" varient="contained" sx={{color:'#252F3E'}}>ANSWER 3</Button>
        <Button theme={theme} color="primary" varient="contained" sx={{color:'#252F3E'}}>ANSWER 4</Button>
      </ButtonGroup>
    </div>
  );
}

export default QuizScreen;
