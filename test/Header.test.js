import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/components/Header/Header';

describe.skip('Header', () => {
  it('should be stateless', () => {
    const header = shallow(<Header />);
    console.log(header.state);
    // broken...
    expect(header.state).toBeDefined();
  });
});