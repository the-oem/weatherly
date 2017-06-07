import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  const { unit, tempHigh, tempLow } = data;
  const iconPath = `assets/svg/${data.icon}.svg`;

  return (
    <div className='weather-card'>
      <p className='unit-of-time'>{unit}</p>
      <img src={iconPath} alt='current condition icon'/>
      <div className='temp-container'>
        <p className='temp-high'>{tempHigh}&#8457;</p>
        {tempLow &&
          <hr className='high-low-line'></hr>
        }
        {tempLow &&
          <p className='temp-low'>{tempLow}&#8457;</p>
        }
      </div>
    </div>
  );
};

export default WeatherCard;
