import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Player } from '@lottiefiles/react-lottie-player';

const CountryDetails = ({ countries }) => {
  const { cca3 } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const country = countries.find((country) => country.alpha3Code === cca3);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className={`container mx-auto p-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
      <button onClick={() => navigate(-1)} className="mb-10 flex w-32 shadow-b justify-center gap-x-2 p-2 rounded-md md:mt-[60px]"> <Player
          autoplay
          loop
          src={theme === "dark" ? "https://lottie.host/88359cb0-8397-46ac-9587-c5a65d812c1e/mFd0cEx1Dj.json" : "https://lottie.host/d12fd488-6ebf-4880-9d4c-a445b01bf313/sAHCQuFu6h.json"}
          style={{ height: '27px', width: '27px', }}
        />Back</button>
      <div className="flex flex-col 2xl:flex-row w-full justify-between  items-center space-y-4">


        <img src={country.flag} alt={`${country.name} flag`} className=" w-full sm:w-[630px] sm:h-[430px]" />

        <div className=' 2xl:w-[700px]'>
         <div>
            <h1 className="text-3xl font-bold mb-8">{country.name}</h1>
        </div>


        <div className='flex flex-col sm:flex-row '>
          <div className='flex flex-col gap-y-2 '>
            <p><strong>Native Name:</strong> {country.nativeName}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Sub Region:</strong> {country.subregion}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
        </div>

           <div className='flex flex-col gap-y-2 mt-8 sm:mt-0'>
             <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(', ') || 'N/A'}</p>
             <p><strong>Currencies:</strong> {country.currencies?.map(currency => `${currency.name} (${currency.symbol})`).join(', ') || 'N/A'}</p>
             <p><strong>Languages:</strong> {country.languages?.map(language => language.name).join(', ') || 'N/A'}</p>
           </div>

         </div>

        <p className=' mt-7 sm:flex  sm:mt-24'><strong>Border Countries:</strong>
         <p>{country.borders?.join(', ') || 'N/A'}</p></p>


        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
