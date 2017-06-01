import React, { Component } from 'react';
import './WeatherFull.css';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherHourly from '../WeatherHourly/WeatherHourly';
import WeatherDaily from '../WeatherDaily/WeatherDaily';

const WeatherFull = ({ now, hourly, daily }) => {
  return (
    <section className='weather-full'>
      <WeatherNow { ...now }/>
      <WeatherHourly { ...hourly }/>
      <WeatherDaily { ...daily }/>
    </section>
    );
};

export default WeatherFull;