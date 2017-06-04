import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherCard from '../lib/components/WeatherCard/WeatherCard';
<<<<<<< HEAD
import { cleanTestData } from './data/test-data';

describe('Daily WeatherCard', () => {
  var component;

  beforeEach(() => {
    component = shallow(<WeatherCard type="daily" key='0' data={cleanTestData.daily[0]} />);
  });

  it('should render daily DATE data', () => {
    var date = component.find('p.unit-of-time');
    expect(date.text()).toEqual('5/31');
  });

  it('should render daily IMG icon', () => {
    var img = component.find('img');

    expect(img.prop('src')).toEqual('assets/svg/partlycloudy.svg');
  });

  it('should render daily TEMP HIGH data', () => {
    var tempHigh = component.find('p.temp-high');

    expect(tempHigh.text()).toEqual('77℉');
  });

  it('should render daily TEMP LOW data', () => {
    var tempLow = component.find('p.temp-low');

    expect(tempLow.text()).toEqual('52℉');
  });
});

describe('Hourly WeatherCard', () => {
  var component;

  beforeEach(() => {
    component = shallow(<WeatherCard type="hourly" key='0' data={cleanTestData.hourly[0]} />);
  });

  it('should render hourly TIME data', () => {
    console.log(component.debug());
    var time = component.find('p.unit-of-time');

    expect(time.text()).toEqual('3:00 PM');
  });

  it('should render hourly IMG icon', () => {
    var img = component.find('img');

    expect(img.prop('src')).toEqual('assets/svg/cloudy.svg');
  });

  it('should render hourly TEMP data', () => {
    var temp = component.find('p.temp-high');

    expect(temp.text()).toEqual('76℉');
  });

  it('should NOT render hourly TEMP LOW data', () => {
    var tempLow = component.find('p.temp-low');

    expect(tempLow).toHaveLength(0);
=======
// import testData

describe.skip('WeatherCard', () => {
  it('should render', () => {
    var component = shallow(<WeatherCard type="daily" data='');

>>>>>>> 517988166f62551a093335789ea4748406b58421
  });
});
