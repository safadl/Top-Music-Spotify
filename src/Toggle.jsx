import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from './images/moon.svg';
import { ReactComponent as SunIcon } from './images/sun.svg';

const ToggleContainer = styled.button`
border-width:0.5px;
border:none;
position: relative;
display: flex;
justify-content: space-between;
background: ${({ theme }) => theme.gradient};
width: 3rem;
height: 1.8rem;
margin-left:92%;
margin-top:3%;
border-radius: 30px;
font-size: 0.5rem;
padding: 0.5rem;
overflow: hidden;
justify-content:center;
cursor: pointer;
svg {
  width: 1rem;
  height: auto;
  transition: all 0.3s linear;
  &:first-child {
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
  }
  &:nth-child(2) {
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
  }
}

`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;