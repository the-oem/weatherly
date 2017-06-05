import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from '../lib/components/SearchBar/SearchBar';

describe('SearchBar', () => {
  let component = mount(<SearchBar />);

  it('should render the SEARCH BAR', () => {
    console.log(component.debug());
    const searchBar = component.find('input.search-bar');
    expect(searchBar).toHaveLength(1);
  });

  it.skip('should render "welcome"', () => {
    const component = shallow(<Welcome />);
    const greeting = component.find('h2');
    expect(greeting.text()).toEqual('welcome');
  });

  it.skip('should render the search bar', () => {

  });
});
