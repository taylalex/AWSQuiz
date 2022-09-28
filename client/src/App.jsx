import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
// import screens
import QuizScreen from './screens/quizScreen';
import HomeScreen from './screens/homeScreen';
import ScoreScreen from './screens/scoreScreen';

function App() {
  // const image = require('./AWSQuiz-logo.png')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/score" element={<ScoreScreen />} />
      </Routes>
    </Router>

  );
}

export default App;
