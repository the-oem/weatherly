import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherDaily from '../lib/components/WeatherDaily/WeatherDaily';
import { cleanTestData } from './data/test-data';

describe('WeatherDaily', () => {
  let component;

  beforeEach(() => {
    component = mount(<WeatherDaily daily={cleanTestData.daily} />);
  });

  it('should render 10 WeatherCards', () => {
    const cards = component.find('div.weather-card');
    expect(cards).toHaveLength(10);
  });
});
