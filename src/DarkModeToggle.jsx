import React, { useContext } from 'react';
import './DarkModeToggle.css';
import ThemeContext from './ThemeContext';

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>

<button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>

 

    </>

  );
}

export default DarkModeToggle;




