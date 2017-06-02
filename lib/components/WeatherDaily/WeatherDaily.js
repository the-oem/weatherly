import React, { Component } from 'react';
import './WeatherDaily.css';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherDaily = ({ daily }) => {
  daily.splice(10);

  return (
    <div className='weather-daily'>
      { daily.map((day, i) => <WeatherCard key={i} type='daily' data={day}/>) }
    </div>
  );
};

export default WeatherDaily;
