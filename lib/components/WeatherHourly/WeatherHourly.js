import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherHourly.css';


const WeatherHourly = ({ hourly }) => {
  hourly.splice(7);

  return (
    <div className='weather-hourly'>
      { hourly.map((hour, i) => <WeatherCard key={i} data={hour} />) }
    </div>
  );
};

export default WeatherHourly;
