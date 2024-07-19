import React, { useEffect, useState } from 'react';

const HourlyWeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('http://localhost:4000/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.log(error);;
            }
        };

        fetchWeatherData();
    }, []);


  return (
    
    <div className="bg-white bg-opacity-30 rounded-xl text-black p-6 m-4 shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4">
      <h3 className="text-2xl font-bold mb-4 text-black">Hourly Forecast</h3>
      <div className="flex justify-around">
        {weatherData == null ?"":
        weatherData.hourly.slice(0,5).map((hour, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="mb-2">{1+index}:00</p>
            <p className="mb-2">{Math.floor(hour.temp/10)}°C</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeatherCard;