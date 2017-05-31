import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = (hour) => {
  // console.log(hour.icon);
  let icon = hour.icon;
  let temp = hour.temp.english;
  let time = hour.FCTTIME.civil;

  return (
    <div>
      {icon}
      {temp}
      {time}
    </div>
  );
};

export default WeatherCard;
