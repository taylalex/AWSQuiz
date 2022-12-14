import React from 'react';

import image from '../assets/not-found-image.png';
import '../components/App.css';

function NotFoundScreen() {
  return (
    <div className="App">
      <img
        data-testid="not-found-image"
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
