// src/components/SortDropdown.js
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SortDropdown = ({ handleSort }) => {
  const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    handleSort(region);
    setIsOpen(false);
  };

  return (
    <div className=" mt-8 lg:m-0 relative">
      <button
        onClick={toggleDropdown}
        className={`duration-500 ${theme === "dark" ? "bg-[#2B3743] text-white" : "bg-white"} w-60 p-4 h-16 rounded-md shadow-md flex justify-between items-center`}
      >
        <span>{selectedRegion}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className={`absolute mt-2 w-full rounded-md shadow-lg ${theme === "dark" ? "bg-[#2B3743] text-white" : "bg-white"} z-10`}>
          <ul className="py-1">
            {regions.map((region) => (
              <li
                key={region}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                onClick={() => handleRegionClick(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
