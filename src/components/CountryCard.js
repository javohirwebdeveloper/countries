import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CountryCard = ({ country }) => {
  const { theme } = useTheme();

  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${theme === "dark" ? "bg-[#2B3743] text-white" : "bg-white text-black"} w-[300px] `}>
      <Link to={`/country/${country.alpha3Code}`}>
        <img src={country.flags.svg} alt={`${country.name} flag`} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-xl">{country.name}</h3>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
