import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = ({ type, data }) => {
  const iconPath = `assets/svg/${data.icon}.svg`;
  const unitOfTime = data.unit;
  const tempHigh = data.tempHigh;
  const tempLow = data.tempLow;

  return (
    <div className='weather-card'>
      <p className='unit-of-time'>{unitOfTime}</p>
      <img src={iconPath}/>
      <p className='temp'>{tempHigh}&#8457;</p>
      {tempLow &&
        <p className='temp'>{tempLow}&#8457;</p>
      }
    </div>
  );
};

export default WeatherCard;