import React, { Component } from 'react';
import './WeatherCard.css';

const WeatherCard = (unitOfTime) => {
  console.log(unitOfTime.high);
  // let icon = unitOfTime.icon;
  // let tempHigh = unitOfTime.temp.english || unitOfTime.high.fahrenheit;
  // let unit = unitOfTime.FCTTIME.civil || `${unitOfTime.date.month}/${unitOfTime.date.day}`;
  // let tempLow = unitOfTime.low.fahrenheit || '';

  return (
    <div>
      {/* {unit}
      {icon}
      {tempHigh}
      {tempLow} */}
    </div>
  );
};

export default WeatherCard;
