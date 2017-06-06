import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherDaily.css';

const WeatherDaily = ({ daily }) => {
  daily.splice(10);

  return (
    <div className='weather-daily'>
      { daily.map((day, i) => <WeatherCard key={i} data={day} />) }
    </div>
  );
};

export default WeatherDaily;
