import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../lib/components/Main/Main';

describe('Main', () => {
  it('should be stateful', () => {
    let main = shallow(<Main />);
    expect(main.state('isDevelopment')).toEqual(true);
  });

  it('should set location to storage', () => {
    const main = shallow(<Main />);
    const ls = global.localStorage;

    // main.setLocation(12345);

    ls.setItem('location', 12345);
    // console.log(ls.getItem('location'));
    // expect(ls.getItem('location')).toEqual(12345);
    // expect(main.getLocation()).toEqual(12345);
  });

  it('should get location from storage', () => {
    // https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0ahUKEwiZ08OBiaPUAhVDx2MKHR7gATUQFgg8MAM&url=https%3A%2F%2Fauth0.com%2Fblog%2Ftesting-react-applications-with-jest%2F&usg=AFQjCNEAmXF2TUF5zlX5cXrrj27D4ZbGjA&sig2=5W70dzIFW9xxbjyoCqiNpw

    const main = shallow(<Main />);
    // const ls = require('../__mocks__/browserMock.js');
    console.log(ls);

    ls.setItem('location', 12345);

    // const storedLocation = ls.getItem('location');
    // console.log(storedLocation);

    expect(main.getLocation()).toEqual('12345');
  });

  it('should render', () => {

  });
});
