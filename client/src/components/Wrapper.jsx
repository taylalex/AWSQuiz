import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import image from '../assets/Logo.png';

function Wrapper() {
  return (
    <div className="App">
      <Link to="/">
        <img
          id="logo"
          src={image}
          alt="logo"
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
