import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import image from '../assets/aws-quiz-logo.png';

function Wrapper() {
  return (
    <div className="App">
      <Link data-testid="home-link" to="/">
        <img
          data-testid="aws-quiz-logo"
          id="aws-quiz-logo"
          src={image}
          alt="aws-quiz-logo"
          style={{
            cursor: 'pointer', height: '12rem', width: '38rem', margin: '3rem',
          }}
        />
      </Link>
      <Outlet />
    </div>
  );
}

export default Wrapper;
