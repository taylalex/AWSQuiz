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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<HomeScreen />} />
          <Route path="/quiz/:sessionId" element={<QuizScreen />} />
          <Route
            path="/score/:sessionId"
            element={(
              <ScoreScreen />
          )}
          />
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
