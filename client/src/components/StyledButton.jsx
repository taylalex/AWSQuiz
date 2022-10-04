/* eslint-disable react/prop-types */
import React from 'react';

import { createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#FF9900',
    },
    secondary: {
      main: '#FF9900',
    },
  },
});

function StyledButton({ label, onClick }) {
  return (
    <Button
      theme={buttonTheme}
      color="primary"
      varient="contained"
      sx={{ color: '#252F3E' }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
export default StyledButton;
