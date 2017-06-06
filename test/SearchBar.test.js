import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../lib/components/SearchBar/SearchBar';
import Tree from '@theoem/complete-me';

describe('SearchBar', () => {
  const component = shallow(<SearchBar />);
  const props = {
    input: '',
  };

  it('should render the SEARCH BAR', () => {
    const searchBar = component.find('input.search-bar');
    expect(searchBar).toHaveLength(1);
  });

  it('should maintain state', () => {
    component.instance().setState({ input: 'Denver, CO' });
    expect(component.state('input')).toEqual('Denver, CO');

    component.instance().setState({ input: '' });
    expect(component.state('input')).toEqual('');
  });

  it('should render a search button if showButton is true', () => {
    props.showButton = false;
    let searchButton = component.find('#search-button');
    expect(searchButton).toHaveLength(0);

    props.showButton = true;
    searchButton = component.find('#search-button');
    expect(searchButton).toBeTruthy();
  });

  it('should render suggestions if they exist', () => {
    props.suggestions = [];
    let suggestions = component.find('suggestion-div');
    expect(suggestions).toHaveLength(0);

    props.suggestions = ['Denver, CO', 'Denton, TX'];
    suggestions = component.find('suggestion-div');
    expect(suggestions).toBeTruthy();
  });
});
