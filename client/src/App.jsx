import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import Material UI components
import { ButtonGroup, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// import screens
import QuizScreen from './screens/quizScreen'
import HomeScreen from './screens/homeScreen'


function App() {
  
  // const image = require('./AWSQuiz-logo.png')
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/quiz' element={<QuizScreen/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
