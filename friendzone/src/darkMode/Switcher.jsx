import React, { useState } from 'react';
import useDarkSide from '../customHooks/useDarkSide'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} style={{ backgroundColor: 'transparent', color: 'white', fill:'white'}}/>
      </div>
    </>
  );
}