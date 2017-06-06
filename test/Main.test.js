import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../lib/components/Main/Main';

describe('Main', () => {
  it('should be stateful', () => {
    const main = shallow(<Main />);

    main.instance().setState({ isDevelopment: true });
    expect(main.state('isDevelopment')).toEqual(true);

    main.instance().setState({ isDevelopment: false });
    expect(main.state('isDevelopment')).toEqual(false);
  });

  it('should set location to storage', () => {
    const main = shallow(<Main />);
    const ls = global.localStorage;

    main.instance().setLocation(12345);
    expect(ls.getItem('location')).toEqual('12345');
  });

  it('should get location from storage', () => {
    const main = shallow(<Main />);
    const ls = global.localStorage;

    ls.setItem('location', 12345);
    expect(main.instance().getLocation()).toEqual('12345');
  });

  it('should toggle view', () => {
    const main = shallow(<Main />);

    main.instance().setState({ key: true });
    expect(main.state('key')).toEqual(true);

    main.instance().toggleView('key');
    expect(main.state('key')).toEqual(false);
  });

  it('should render Header', () => {
    const main = mount(<Main />);

    const header = main.find('div.header');
    expect(header).toHaveLength(1);
  });

  it('should render WeatherFull when local storage is NOT empty', () => {
    const ls = global.localStorage;
    ls.setItem('location', 12345);

    const main = mount(<Main />);
    expect(main.instance().getLocation()).toEqual('12345');

    const weatherFull = main.find('.weather-full');
    expect(weatherFull).toHaveLength(1);
  });

  it('should render Welcome when local storage is empty', () => {
    const ls = global.localStorage;
    ls.clear();

    const main = mount(<Main />);
    expect(main.instance().getLocation()).toEqual(undefined);

    const welcome = main.find('.welcome-search');
    expect(welcome).toHaveLength(1);
  });
});