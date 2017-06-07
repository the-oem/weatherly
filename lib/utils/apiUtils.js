import $ from 'jquery';
import getScrubbedData from './dataUtils';
import { testData } from '../../test/data/test-data';
import apiKey from '../../test/apiKey';

const getWeatherData = location => {
  if (parseInt(location, 10)) {
    return $.get(`http://api.wunderground.com/api/${apiKey}/hourly/forecast10day/conditions/q/${location}.json`)
      .then(data => {
        let results;
        if (data.response.error) {
          if (localStorage.getItem('goodLocation')) {
            localStorage.setItem('location', localStorage.getItem('goodLocation'));
          }
          results = { results: false };
        } else {
          localStorage.setItem('location', location);
          results = getScrubbedData(data);
        }
        return results;
      })
      .catch(error => console.log('catch', error));
  } else {
    const cityStateArr = location.split(', ');
    return $.get(`http://api.wunderground.com/api/${apiKey}/hourly/forecast10day/conditions/q/${cityStateArr[1]}/${cityStateArr[0]}.json`)
      .then(data => {
        let results;
        if (data.response.results) {
          if (localStorage.getItem('goodLocation')) {
            localStorage.setItem('location', localStorage.getItem('goodLocation'));
          }
          results = { results: false };
        } else {
          localStorage.setItem('location', location);
          results = getScrubbedData(data);
        }
        return results;
      })
      .catch(error => {
        console.log('No cities match your search query', error);
        return { results: false };
      });
  }
};

const getTestWeatherData = () => {
  return getScrubbedData(testData);
};

export { getWeatherData, getTestWeatherData };
