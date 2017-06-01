import React, { Component } from 'react';
import './WeatherDaily.css';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherDaily = (daily) => {
  return (
    <div className='weather-daily'>
      {/* TODO: Figure out looping on this, iterate 10 times */}
      <WeatherCard type='daily' data={daily.days[0]}/>
      <WeatherCard type='daily' data={daily.days[1]}/>
      <WeatherCard type='daily' data={daily.days[2]}/>
      <WeatherCard type='daily' data={daily.days[3]}/>
      <WeatherCard type='daily' data={daily.days[4]}/>
      <WeatherCard type='daily' data={daily.days[5]}/>
      <WeatherCard type='daily' data={daily.days[6]}/>
      <WeatherCard type='daily' data={daily.days[7]}/>
      <WeatherCard type='daily' data={daily.days[8]}/>
      <WeatherCard type='daily' data={daily.days[9]}/>
    </div>
  );
};

export default WeatherDaily;
