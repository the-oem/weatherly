import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherNow from '../lib/components/WeatherNow/WeatherNow';
import { cleanTestData } from './data/test-data';

describe('WeatherNow', () => {
  let component;

  beforeEach(() => {
    component = shallow(<WeatherNow {...cleanTestData.now} />);
  });

  it('should render the DATE', () => {
    const date = component.find('#date');
    expect(date.text()).toEqual('Wednesday, May 31st, 2017');
  });

  it('should render the LOCATION', () => {
    const location = component.find('#location');
    expect(location.text()).toEqual('Littleton, CO');
  });

  it('should render CURRENT TEMP', () => {
    const currentTemp = component.find('#currentTemp');
    expect(currentTemp.text()).toEqual('78.3℉');
  });

  it('should render the proper IMG', () => {
    const img = component.find('img');
    expect(img.prop('src')).toEqual('assets/svg/mostlycloudy.svg');
  });

  it('should render the CURRENT CONDITION', () => {
    const currentCondition = component.find('#currentCondition');
    expect(currentCondition.text()).toEqual('Mostly Cloudy');
  });

  it('should render the TEMP HIGH', () => {
    const tempHigh = component.find('#tempHigh');
    expect(tempHigh.text()).toEqual('77℉');
  });

  it('should render the TEMP LOW', () => {
    const tempLow = component.find('#tempLow');
    expect(tempLow.text()).toEqual('52℉');
  });

  it('should render the TODAy CONDITION', () => {
    const todayCondition = component.find('#todayCondition');
    expect(todayCondition.text()).toEqual(
      'A mix of clouds and sun. High 77F. Winds SSW at 10 to 15 mph.');
  });
});
