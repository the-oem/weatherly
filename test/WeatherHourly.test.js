import React from 'react';
import { mount } from 'enzyme';
import WeatherHourly from '../lib/components/WeatherHourly/WeatherHourly';
import { cleanTestData } from './data/test-data';

describe('WeatherHourly', () => {
  it('should render seven WeatherCards', () => {
    let component = mount(<WeatherHourly hourly={cleanTestData.hourly} />);
    const cards = component.find('div.weather-card');
    expect(cards).toHaveLength(7);
  });
});