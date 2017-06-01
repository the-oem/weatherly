import React, { Component } from 'react';
import './WeatherFull.css';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherHourly from '../WeatherHourly/WeatherHourly';
import WeatherDaily from '../WeatherDaily/WeatherDaily';

const WeatherFull = ({ state, toggleView }) => {
  const { now, hourly, daily, showHourly, showDaily } = state;
  const contentHourly = showHourly ? <WeatherHourly { ...hourly }/> : '';
  const contentDaily = showDaily ? <WeatherDaily { ...daily }/> : '';

  return (
    <section className='weather-full'>
      <WeatherNow { ...now }/>
      {contentHourly}
      <button onClick={() => toggleView('showHourly')}>toggle hourly</button>
      {contentDaily}
      <button onClick={() => toggleView('showDaily')}>toggle daily</button>
    </section>
    );
};

export default WeatherFull;