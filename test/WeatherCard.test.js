import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from '../lib/components/WeatherCard/WeatherCard';
import { cleanTestData } from './data/test-data';

describe('Daily WeatherCard', () => {
  let component;

  beforeEach(() => {
    component = shallow(<WeatherCard type="daily" key='0' data={cleanTestData.daily[0]} />);
  });

  it('should render daily DATE data', () => {
    const date = component.find('p.unit-of-time');
    expect(date.text()).toEqual('5/31');
  });

  it('should render daily IMG icon', () => {
    const img = component.find('img');
    expect(img.prop('src')).toEqual('assets/svg/partlycloudy.svg');
  });

  it('should render daily TEMP HIGH data', () => {
    const tempHigh = component.find('p.temp-high');
    expect(tempHigh.text()).toEqual('77℉');
  });

  it('should render daily TEMP LOW data', () => {
    const tempLow = component.find('p.temp-low');
    expect(tempLow.text()).toEqual('52℉');
  });
});

describe('Hourly WeatherCard', () => {
  let component;

  beforeEach(() => {
    component = shallow(<WeatherCard type="hourly" key='0' data={cleanTestData.hourly[0]} />);
  });

  it('should render hourly TIME data', () => {
    const time = component.find('p.unit-of-time');
    expect(time.text()).toEqual('3:00 PM');
  });

  it('should render hourly IMG icon', () => {
    const img = component.find('img');
    expect(img.prop('src')).toEqual('assets/svg/cloudy.svg');
  });

  it('should render hourly TEMP data', () => {
    const temp = component.find('p.temp-high');
    expect(temp.text()).toEqual('76℉');
  });

  it('should NOT render hourly TEMP LOW data', () => {
    const tempLow = component.find('p.temp-low');
    expect(tempLow).toHaveLength(0);
  });
});
