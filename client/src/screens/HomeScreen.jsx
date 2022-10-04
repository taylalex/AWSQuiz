import React from 'react';

import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';

import StyledButton from '../components/StyledButton';

function HomeScreen() {
  return (
    <>
      <p>Welcome to the AWS Quiz!</p>
      <p>You will be given the logo of multiple AWS services, can you name them all?</p>
      <MenuButtons />
    </>
  );
}

function MenuButtons() {
  const navigate = useNavigate();

  const routeChange = (path) => {
    navigate(`${path}`);
  };

  return (
    <ButtonGroup varient="text">
      <StyledButton label="Easy" onClick={() => routeChange('/quiz')} />
      <StyledButton label="Medium" />
      <StyledButton label="Hard" />
    </ButtonGroup>
  );
}

export default HomeScreen;
