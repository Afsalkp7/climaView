// src/BackgroundWindow.js
import React from 'react';
import WeaterBox from './WeaterBox';
import WeatherCard from './WeaterCard';

const Background = () => {
  return (
    <div className="bg-window grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center text-white">
        <div className="col-span-1 text-center">
          <WeaterBox />
        </div>
        <div className="col-span-1">
          <WeatherCard />
        </div>
</div>
  );
};

export default Background;
