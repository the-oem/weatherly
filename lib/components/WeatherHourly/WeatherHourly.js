import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherHourly.css';


const WeatherHourly = (hourly) => {
  // console.log(hourly.hours[0]);

  return (
    <div className='weather-hourly'>
      {/* TODO: Refactor the shit out of this */}
      <WeatherCard type='hourly' data={hourly.hours[0]}/>
      <WeatherCard type='hourly' data={hourly.hours[1]}/>
      <WeatherCard type='hourly' data={hourly.hours[2]}/>
      <WeatherCard type='hourly' data={hourly.hours[3]}/>
      <WeatherCard type='hourly' data={hourly.hours[4]}/>
      <WeatherCard type='hourly' data={hourly.hours[5]}/>
      <WeatherCard type='hourly' data={hourly.hours[6]}/>
    </div>
  );
};

export default WeatherHourly;
