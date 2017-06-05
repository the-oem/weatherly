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
  today = new Moment(today).format('dddd, MMMM Do, YYYY');

  return (
    <section className='weather-now'>
      <article className='date-location'>
        <h2 id='date'>{today}</h2>
        <h2 id='location'>{cityState}</h2>
      </article>
      <article className='current-conditions'>
        <p id='currentTemp' className='current-temp'>{currentTemp}&#8457;</p>
        <img src={iconUrl} className='condition-image' alt='current condition icon'/>
        <p id='currentCondition'>{currentCondition}</p>
      </article>
      <article className='temps-summary'>
        <div className='high-low'>
          <p id='tempHigh'>{todayHigh}&#8457;</p>
          <hr className='high-low-line'></hr>
          <p id='tempLow'>{todayLow}&#8457;</p>
        </div>
        <p id='todayCondition'>{todayCondition}</p>
      </article>
    </section>
  );
};

export default WeatherNow;
