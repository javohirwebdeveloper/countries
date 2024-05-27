// src/components/SearchBar.js
import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useTheme } from '../context/ThemeContext';

const SearchBar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const { theme } = useTheme();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(searchInput);
  };

  return (
    <div className={`duration-500 p-4 flex items-center space-x-5 w-full lg:w-[600px] rounded-md shadow-xl ${theme === "dark" ? "bg-[#2B3743]" : "bg-white"} h-16 px-10`}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={handleInputChange}
        className="h-full w-full outline-none bg-transparent"
      />
      <button
        onClick={handleButtonClick}
        className="flex items-center justify-center"
      >
        <Player
          autoplay
          loop
          src={theme === "dark" ? "https://lottie.host/a87e9ff5-5b13-4037-994d-cbbc896e1271/NWb3lUtx9j.json" : "https://lottie.host/7ee55f39-6d2b-4616-be9c-c04218dd183a/FceQ7jN5wo.json"}
          style={{ height: '27px', width: '27px' }}
        />
      </button>
    </div>
  );
};

export default SearchBar;
