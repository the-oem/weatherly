import React, { Component } from 'react';
import './WeatherFull.css';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherHourly from '../WeatherHourly/WeatherHourly';
import WeatherDaily from '../WeatherDaily/WeatherDaily';

const WeatherFull = ({ state, toggleView }) => {
  const { now, hourly, daily, showHourly, showDaily } = state;
  // const contentHourly = showHourly ? <WeatherHourly hourly={hourly.hours}/> : '';
  // const contentDaily = showDaily ? <WeatherDaily daily={daily.days}/> : '';
  const contentHourly = showHourly ? <WeatherHourly hourly={hourly}/> : '';
  const contentDaily = showDaily ? <WeatherDaily daily={daily}/> : '';

  return (
    <section className='weather-full'>
      <WeatherNow { ...now }/>
      {contentHourly}
      <button onClick={() => toggleView('showHourly')}>toggle hourly</button>
      {contentDaily}
      <button onClick={() => toggleView('showDaily')}>toggle 10-day</button>
    </section>
    );
};

export default WeatherFull;
