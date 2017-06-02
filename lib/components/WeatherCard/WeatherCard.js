import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = ({ type, data }) => {
  const iconPath = `assets/svg/${data.icon}.svg`;
  let unitOfTime = data.unit;
  let tempHigh = data.tempHigh;
  let tempLow = data.tempLow;

  return (
    <div className='weather-card'>
      <p>{unitOfTime}</p>
      <img src={iconPath}/>
      {/* <p>{icon}</p> */}
      <p>{tempHigh}</p>
      <p>{tempLow}</p>
    </div>
  );
};

export default WeatherCard;
