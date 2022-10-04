import React from 'react';

import image from '../assets/404.png';
import '../components/App.css';

function NotFoundScreen() {
  return (
    <div className="App">
      <img
        src={image}
        alt="not found"
        style={{
          height: '38rem', width: '38rem', margin: '6rem',
        }}
      />
    </div>
  );
}

export default NotFoundScreen;
