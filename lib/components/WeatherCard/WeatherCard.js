import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {
  const type = props.type;
  const data = props.data;
  const iconPath = `assets/${data.icon}.svg`;
  const icon = data.icon;
  let unitOfTime;
  let tempHigh;
  let tempLow;


  if (type === 'hourly') {
    unitOfTime = data.FCTTIME.civil;
    tempHigh = data.temp.english;
  } else {
    unitOfTime = `${data.date.month}/${data.date.day}`;
    tempHigh = data.high.fahrenheit;
    tempLow = data.low.fahrenheit;
  }

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
