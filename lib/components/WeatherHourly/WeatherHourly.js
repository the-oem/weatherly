import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherHourly.css';


const WeatherHourly = (hourly) => {
  console.log(hourly.hours[0]);

  return (
    <div className='weather-hourly'>
      {/* TODO: Refactor the shit out of this */}
      <WeatherCard {...hourly.hours[0]}/>
      <WeatherCard {...hourly.hours[1]}/>
      <WeatherCard {...hourly.hours[2]}/>
      <WeatherCard {...hourly.hours[3]}/>
      <WeatherCard {...hourly.hours[4]}/>
      <WeatherCard {...hourly.hours[5]}/>
      <WeatherCard {...hourly.hours[6]}/>
    </div>
  );
};

export default WeatherHourly;
