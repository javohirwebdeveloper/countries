import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('/countries.json');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const filteredCountries = countries.filter((country) => {
    const nameMatches = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const regionMatches = selectedRegion === 'All' || country.region === selectedRegion;
    return nameMatches && regionMatches;
  });
  return (
    <div className={` duration-500  ${theme === "dark" ? " bg-[#202D36] text-white" : "text-black bg-[#FAFAFA]" } min-h-screen`}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className=' min-[867px]:px-20  px-10 '>
            <div className='lg:flex justify-between mt-9'> <SearchBar handleSearch={handleSearch} />
              <SortDropdown handleSort={handleRegionChange} /></div>
             
              <div className=" mt-10 flex flex-col items-center md:grid md:grid-cols-2 min-[1128px]:grid-cols-3 gap-y-24 lg:gap-x-32 min-[1403px]:grid-cols-4 gap-4 p-4">
              {filteredCountries.map((country) => (
                  <CountryCard key={country.cca3} country={country} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/country/:cca3" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
};

export default App;
