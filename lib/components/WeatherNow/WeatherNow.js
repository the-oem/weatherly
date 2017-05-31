import React, { Component } from 'react';
import './WeatherNow.css';

const WeatherNow = (props) => {
  let { today,
        cityState,
        currentTemp,
        currentCondition,
        todayHigh,
        todayLow,
        todayCondition,
      } = props;

  return (
    <section className='weather-now'>
      <article className='date-location'>
        <h2>{today}</h2>
        <h2>{cityState}</h2>
      </article>
      <article className='current-conditions'>
        <p className='current-temp'>{currentTemp}&#8457;</p>
        <img src='assets/partly-cloudy.svg' className='condition-image'/>
        <p>{currentCondition}</p>
      </article>
      <article className='temps-summary'>
        <div className='high-low'>
          <p>{todayHigh}&#8457;</p>
          <hr className='high-low-line'></hr>
          <p>{todayLow}&#8457;</p>
        </div>
        <p>{todayCondition}</p>
      </article>
    </section>
  );
};

export default WeatherNow;
