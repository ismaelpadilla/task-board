import React from 'react';
import './darkModeToggle.css';

const DarkModeToggle = (props) => {
  const toggleDarkMode = () => props.toggleDarkMode();

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" onClick={toggleDarkMode} id="toggle" className="sr-only" />
            <div className="block bg-gray-600 w-5 h-3 rounded-full"></div>
            <div className="dot absolute -left-1 top-0 bg-blue-500 w-3 h-3 rounded-full transition"></div>
          </div>
          <div className="ml-3 font-sans text-base dark:text-gray-100">
            Dark mode
          </div>
        </label>
      </div>
    </div>
  )
}

export default DarkModeToggle;
