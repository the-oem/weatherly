import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = (hour) => {
  // console.log(hour.icon);
  let icon = `assets/${hour.icon}.svg`;
  let temp = hour.temp.english;
  let time = hour.FCTTIME.civil;

  return (
    <div className='weather-card'>
      <img src={icon}/>
      {temp}
      {time}
    </div>
  );
};

export default WeatherCard;
