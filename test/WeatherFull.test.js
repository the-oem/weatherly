import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherFull from '../lib/components/WeatherFull/WeatherFull';
import { cleanTestData } from './data/test-data';

describe('WeatherFull RENDER', () => {
  let component;

  beforeEach(() => {
    component = mount(<WeatherFull state={cleanTestData} />);
  });

  it('should render WeatherNow', () => {
    const weatherNow = component.find('section.weather-now');
    expect(weatherNow).toHaveLength(1);
  });

  it('should render WeatherHourly and NOT WeatherDaily by default', () => {
    const weatherHourly = component.find('div.weather-hourly');
    expect(weatherHourly).toHaveLength(1);

    const weatherDaily = component.find('div.weather-daily');
    expect(weatherDaily).toHaveLength(0);
  });

  it('should NOT render WeatherHourly when "showHourly" is false', () => {
    let weatherHourly = component.find('div.weather-hourly');
    expect(weatherHourly).toHaveLength(1);

    cleanTestData.showHourly = false;
    component = mount(<WeatherFull state={cleanTestData} />);
    weatherHourly = component.find('div.weather-hourly');
    expect(weatherHourly).toHaveLength(0);
  });

  it('should render WeatherDaily when "showDaily" is true', () => {
    let weatherDaily = component.find('div.weather-daily');
    expect(weatherDaily).toHaveLength(0);

    cleanTestData.showDaily = true;
    component = mount(<WeatherFull state={cleanTestData} />);
    weatherDaily = component.find('div.weather-daily');
    expect(weatherDaily).toHaveLength(1);
  });
});

describe('WeatherFull TOGGLE (mock function)', () => {
  it('should call "toggleView" function', () => {
    const mockFn = jest.fn();
    const component = shallow(<WeatherFull state={cleanTestData} toggleView={mockFn}/>);

    const toggleHourly = component.find('button.toggle-hourly');
    toggleHourly.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);

    const toggleDaily = component.find('button.toggle-daily');
    toggleDaily.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
