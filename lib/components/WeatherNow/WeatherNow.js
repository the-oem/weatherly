import React, { Component } from 'react';
import Moment from 'moment';
import './WeatherNow.css';

const WeatherNow = (now) => {
  let { cityState,
        currentCondition,
        currentTemp,
        icon,
        today,
        todayCondition,
        todayHigh,
        todayLow,
      } = now;

  let iconUrl = `assets/svg/${icon}.svg`;
  today = new Moment(today).format('dddd, MMMM Do YYYY');

  return (
    <section className='weather-now'>
      <article className='date-location'>
        <h2>{today}</h2>
        <h2>{cityState}</h2>
      </article>
      <article className='current-conditions'>
        <p className='current-temp'>{currentTemp}&#8457;</p>
        <img src={iconUrl} className='condition-image'/>
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
