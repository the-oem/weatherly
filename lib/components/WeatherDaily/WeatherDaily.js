import React, { Component } from 'react';
import './WeatherDaily.css';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherDaily = (daily) => {
  // console.log(daily.days[0]);

  return (
    <div className='weather-daily'>
      <WeatherCard {...daily.days[0]}/>
    </div>
  );
};

export default WeatherDaily;
