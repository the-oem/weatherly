import React, { Component } from 'react';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherHourly from '../WeatherHourly/WeatherHourly';
import WeatherDaily from '../WeatherDaily/WeatherDaily';
import './WeatherFull.css';

const WeatherFull = ({ state, toggleView }) => {
  const { now, hourly, daily, showHourly, showDaily } = state;
  const contentHourly = showHourly ? <WeatherHourly hourly={hourly} /> : '';
  const contentDaily = showDaily ? <WeatherDaily daily={daily} /> : '';
  const chevronUp = '../../../assets/chevron-arrow-up.svg';
  const chevronDown = '../../../assets/chevron-arrow-down.svg';
  let dailyChevron;
  let hourlyChevron;

  showHourly ? hourlyChevron = chevronUp : hourlyChevron = chevronDown;
  showDaily ? dailyChevron = chevronUp : dailyChevron = chevronDown;

  return (
    <section className='weather-full'>
      <WeatherNow { ...now } />
      {contentHourly}
      <button className='toggle-hourly' onClick={() =>
        toggleView('showHourly')}>
        <img src={hourlyChevron} className='chevron-toggle'/>Hourly Forecast
        <img src={hourlyChevron} className='chevron-toggle'/>
      </button>
      {contentDaily}
      <button className='toggle-daily' onClick={() =>
        toggleView('showDaily')}>
        <img src={dailyChevron} className='chevron-toggle'/>10-Day Forecast
        <img src={dailyChevron} className='chevron-toggle'/>
      </button>
    </section>
    );
};

export default WeatherFull;
