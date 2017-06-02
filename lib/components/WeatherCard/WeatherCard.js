import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = ({ type, data }) => {
  // const type = props.type;
  // const data = props.data;
  const iconPath = `assets/${data.icon}.svg`;
  const icon = data.icon;
  let unitOfTime = data.unit;
  let tempHigh = data.tempHigh;
  let tempLow = data.tempLow;

  //
  // if (type !== 'hourly') {
  //   tempLow = data.tempLow;
  // }

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
