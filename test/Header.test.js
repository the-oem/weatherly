import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/components/Header/Header';

describe('Header', () => {
  it('should render the title', () => {
    const component = shallow(<Header />);
    const title = component.find('h1.title');
    expect(title.text()).toEqual('weathrly');
  });

  it('should render the search bar when "showSearch" is true', () => {
    const component = mount(<Header showSearch={true} />);
    const searchBar = component.find('input.search-bar');
    expect(searchBar).toHaveLength(1);
  });

  it('should NOT render the search bar when "showSearch" is false', () => {
    const component = mount(<Header showSearch={false} />);
    const searchBar = component.find('input.search-bar');
    expect(searchBar).toHaveLength(0);
  });
});