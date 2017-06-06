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
});
