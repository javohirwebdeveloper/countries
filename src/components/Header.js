import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={` duration-500 ${theme === "dark" ? "bg-[#2B3743]" : "bg-[#FFFFFF]"} shadow-md min-[867px]:px-20 px-10 py-4`}>
      <div className="flex justify-between items-center">
        <h1 className=" text-base sm:text-2xl font-semibold">Where in the world</h1>
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-md"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
