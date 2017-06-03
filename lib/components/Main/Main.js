import React, { Component } from 'react';
import getWeatherData from '../../utils/apiUtils';
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
    if (this.getLocation()) {
      getWeatherData(this.getLocation()).then((data) => {
        this.setState(data);
      });
    }
  }

  getLocation() {
    return localStorage.getItem('location');
  }

  setLocation(location) {
    localStorage.setItem('location', location);
  }

  changeLocation(location) {
    this.setLocation(location);

    getWeatherData(this.getLocation()).then(data => {
      this.setState(data);
    });
  }

  toggleView(key) {
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let content;

    if (this.getLocation()) {
      content = <WeatherFull state={this.state} toggleView={this.toggleView.bind(this)}/>;
    } else {
      content = <Welcome changeLocation={this.changeLocation.bind(this)}/>;
    }

    return (
      <main>
        <Header changeLocation={this.changeLocation.bind(this)}/>
        {content}
      </main>
    );
  }
}
