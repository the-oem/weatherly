import React, { Component } from 'react';
import HourlyWeatherBlock from '../HourlyWeatherBlock/HourlyWeatherBlock';
import './WeatherHourly.css';

const WeatherHourly = () => {
  let hourlyArray = [
    { temp: '112', img: '../../assets/021-rain-2.svg', hour: '10 am' },
    { temp: '73', img: '', hour: '11 am' },
    { temp: '45', img: '', hour: '12 pm' },
    { temp: '68', img: '', hour: '1 pm' },
    { temp: '95', img: '', hour: '2 pm' },
    { temp: '100', img: '', hour: '3 pm' },
    { temp: '101', img: '', hour: '4 pm' },
  ];

  return (
    <div className='weather-hourly'>
      <HourlyWeatherBlock data={ hourlyArray[0] }/>
      <HourlyWeatherBlock />
      <HourlyWeatherBlock />
      <HourlyWeatherBlock />
      <HourlyWeatherBlock />
      <HourlyWeatherBlock />
      <HourlyWeatherBlock />
    </div>
  );
};

export default WeatherHourly;
