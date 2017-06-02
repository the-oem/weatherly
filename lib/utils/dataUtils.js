const getScrubbedData = data => {
  const hourlyData =
    data.hourly_forecast.map(hour => {
      return { unit: hour.FCTTIME.civil,
                icon: hour.icon,
                tempHigh: hour.temp.english,
                tempLow: '' };
    });

  let dailyData = data.forecast.simpleforecast.forecastday.map(day => {
    return { unit: `${day.date.month}/${day.date.day}`,
              icon: day.icon,
              tempHigh: day.high.fahrenheit,
              tempLow: day.low.fahrenheit };
  });

  let nowData = {
    today: data.current_observation.local_time_rfc822,
    currentTemp: data.current_observation.temp_f,
    currentCondition: data.current_observation.weather,
    todayHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    todayLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    cityState: data.current_observation.display_location.full,
    todayCondition: data.forecast.txt_forecast.forecastday[0].fcttext,
    icon: data.current_observation.icon,
  };

  return {
    now: nowData,
    hourly: hourlyData,
    daily: dailyData,
    showHourly: true,
    showDaily: false,
  };
};

export default getScrubbedData;
