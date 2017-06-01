import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherHourly.css';


const WeatherHourly = (hourly) => {
  hourly.hours.splice(7);
  console.log(hourly.hours);

  return (
    <div className='weather-hourly'>
      { hourly.hours.map((hour, i) => <WeatherCard key={i} type='hourly' data={hour}/>) }
    </div>
  );
};

export default WeatherHourly;
