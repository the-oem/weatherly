import React, { Component } from 'react';
import { getWeatherData, getTestWeatherData } from '../../utils/apiUtils';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import WeatherFull from '../WeatherFull/WeatherFull';
import './Main.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isDevelopment: true,
    };
  }

  componentDidMount() {
    if (this.state.isDevelopment) {
      this.setState(getTestWeatherData());
    } else {
      if (this.getLocation()) {
        getWeatherData(this.getLocation()).then((data) => {
          this.setState(data);
        });
      }
    }
  }

  getLocation() {
    return localStorage.getItem('location');
  }

  setLocation(location) {
    localStorage.setItem('location', location);
  }

  changeLocation(location) {
    if (this.state.isDevelopment) {
      this.setState(getTestWeatherData());
    } else {
      getWeatherData(location).then(data => {
        this.setState(data);
      });
    }
  }

  toggleView(key) {
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let bodyContent;
    let headerContent;

    if (this.getLocation()) {
      headerContent = <Header
        showSearch={true}
        changeLocation={this.changeLocation.bind(this)} />;
      bodyContent = <WeatherFull
        state={this.state}
        toggleView={this.toggleView.bind(this)} />;
    } else {
      headerContent = <Header
        showSearch={false}
        changeLocation={this.changeLocation.bind(this)} />;
      bodyContent = <Welcome
        changeLocation={this.changeLocation.bind(this)} />;
    }

    return (
      <main role='main'>
        {headerContent}
        {bodyContent}
      </main>
    );
  }
}
