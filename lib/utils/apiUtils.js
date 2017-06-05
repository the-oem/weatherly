import $ from 'jquery';
import getScrubbedData from './dataUtils';
import { testData } from '../../test/data/test-data';
import apiKey from '../../test/apiKey';

const getWeatherData = location => {
  if (parseInt(location, 10)) {
    return $.get(`http://api.wunderground.com/api/${apiKey}/hourly/forecast10day/conditions/q/${location}.json`)
      .then(data => {
        console.log(data.response.error);
        if (data.response.error) {
          alert(data.response.error.description);
          return { results: false };
        } else {
          return getScrubbedData(data);
        }
      })
      .catch(error => alert('catch', error));
  } else {
    const cityStateArr = location.split(', ');
    return $.get(`http://api.wunderground.com/api/${apiKey}/hourly/forecast10day/conditions/q/${cityStateArr[1]}/${cityStateArr[0]}.json`)
      .then(data => {
        return getScrubbedData(data);
      })
      .catch(error => {
        // TODO impl same error handling that we do for not found zip code
        // console.log('catch', error);
        // if (data.response.results) {
        alert('No cities match your search query');
        localStorage.removeItem('location');
        return { results: false };
        // }
      });
  }
};

const getTestWeatherData = () => {
  return getScrubbedData(testData);
};

export { getWeatherData, getTestWeatherData };
