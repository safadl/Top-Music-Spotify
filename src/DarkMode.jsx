import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './global';
import Toggle from './Toggle';
function DarkMode() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  // Return the layout based on the current theme
  return (
    <div className="container-fluid text-center" >
    <ThemeProvider theme={theme === 'light'
     ? lightTheme
     : darkTheme
     }>
      <>
        <GlobalStyles />
       
        
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1  style={{marginLeft:'87.5%',fontSize:'1em', marginTop:'-8%',position:'relative' }}> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
     
      </>
    </ThemeProvider>
      </div>
  );
}

export default DarkMode;