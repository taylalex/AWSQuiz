import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// import screens
import QuizScreen from './screens/QuizScreen';
import HomeScreen from './screens/HomeScreen';
import ScoreScreen from './screens/ScoreScreen';
import NotFoundScreen from './screens/NotFoundScreen';

// import components
import Wrapper from './components/Wrapper';

const dummyAnswers = {
  answers: [
    {
      _id: '6332bb734a68466488f14a33',
      answer: 'CloudFormation',
    },
  ],
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<HomeScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
          <Route
            path="/score"
            element={(
              <ScoreScreen userAnswers={dummyAnswers} />
          )}
          />
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>

  );
}

export default App;
